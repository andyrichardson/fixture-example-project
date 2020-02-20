import { getFixtures, detectCosmosConfig } from "react-cosmos";
import config from "./backstop.json";
import fs from "fs";

const cosmosConfig = detectCosmosConfig();

const exec = async () => {
  const fixtures = await getFixtures({ cosmosConfig });
  const newFile = {
    ...config,
    scenarios: fixtures.map(({ fixtureId }) => {
      const baseUrl = `${cosmosConfig.hostname || "localhost"}:${
        cosmosConfig.port
      }/_renderer.html`;
      const getArgs = `?_fixtureId=${encodeURIComponent(
        JSON.stringify(fixtureId)
      )}`;

      return {
        url: `${baseUrl}${getArgs}`,
        label: `${fixtureId.path.replace(/\//g, "-")}-${fixtureId.name}`
      };
    })
  };

  fs.writeFileSync("backstop.json", JSON.stringify(newFile, null, 2));
};

exec();
