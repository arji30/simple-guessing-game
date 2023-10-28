import { passport, config } from "@imtbl/sdk";

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.PRODUCTION,
  }),
  clientId: "kkQK32kD8nBKbsysLlks9kLFqLXbkGwh",
  redirectUri: "https://arji30-number-guess.web.app",
  logoutRedirectUri: "https://arji30-number-guess.web.app",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});

export default passportInstance;
