// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4acd9hu0gr6heelv91jf84mgf5",     // CognitoClientID
  "api_base_url": "https://t65n7qzkqe.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1jc5h5a04o7jv.amplifyapp.com"                                      // AmplifyURL
};

export default config;
