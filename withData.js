import { withAppSyncData } from "next-apollo-appsync";
import awsmobile from "./aws-exports";

const AppSyncConfig = {
    url: awsmobile.aws_appsync_graphqlEndpoint,
    region: awsmobile.aws_appsync_region,
    auth: {
        type: awsmobile.aws_appsync_authenticationType,
        apiKey: awsmobile.aws_appsync_apiKey
    },
};

export default withAppSyncData(AppSyncConfig)