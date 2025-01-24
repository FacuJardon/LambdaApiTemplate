import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import path = require('path');

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const lambda = new Function(this, "lambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: Code.fromAsset(path.join(__dirname, "../../functions/games"))
    });
  }
}
