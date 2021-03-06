import Head from "next/head";
import { contentDescription } from "../constants/web_strings";

const TitleBar = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta name="description" content={contentDescription} />
    </Head>
  );
};

export default TitleBar;
