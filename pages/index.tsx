import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import useSWR from "swr";

import { SelectComponent } from "../src/components/Select";
import { TextFieldComponent } from "../src/components/TextField";
import { AlertError } from "../src/components/AlertError";
import { ConfigDataProps, DataProps } from "../src/interfaces";
import { fetcher } from "../src/helper/fetcher";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useState } from "react";
import { AlertSuccess } from "../src/components/AlertSuccess";

const Home = ({ data: valueData, dateSaved }: DataProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const config = useSWR<ConfigDataProps>("/api/staticdata", fetcher);

  if (config.error) return <AlertError />;

  if (!config.data) return <div>Loading...</div>;

  return (
    <div className="container">
      <Head>
        <title>React Code Challenge | Home</title>
      </Head>

      {isClicked ? (
        <AlertSuccess
          onClose={() => {
            setIsClicked(!isClicked);
          }}
        />
      ) : null}

      <h1 className="header">{config.data?.formName}</h1>

      <div className="content">
        {config.data?.fields?.map((field) => {
          return (
            <div className="fields" key={field.id}>
              <p className="fieldName">{field.name}</p>
              {valueData?.map((value) => {
                return value.fieldId === field.id ? (
                  field.type === "text" ? (
                    <TextFieldComponent
                      key={field.id}
                      type={field.type}
                      value={value.value}
                    />
                  ) : field.type === "select" ? (
                    <SelectComponent
                      key={field.id}
                      options={field.options}
                      value={value.value}
                    />
                  ) : (
                    <TextFieldComponent
                      key={field.id}
                      type={field.type}
                      value={value.value}
                    />
                  )
                ) : null;
              })}
            </div>
          );
        })}
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            //TODO -> Make a function to re-write the json data
            setIsClicked(!isClicked);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  const objectValue = JSON.parse(fileContents);

  return {
    props: objectValue,
  };
}

export default Home;
