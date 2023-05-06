<template></template>

<script>
import Oidc from "oidc-client";

var config = {
  authority: "https://localhost:5001", //identityserver 域名
  client_id: "Vue_Client", //client_id
  client_secret: "Vue_Client_Secret",
  redirect_uri: "http://127.0.0.1:5003/CallBack",
  response_type: "code",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:5003",
  state:"xyz"

};

// var mgr = new Oidc.UserManager(config);
// export default {
//   beforeCreate() {
//     //mgr.signinRedirect();
//     mgr.signinRedirect({ state: { bar: 15 } });
//   },
// };
</script>
