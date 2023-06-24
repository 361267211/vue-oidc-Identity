export const identityServerBase = 'https://localhost:5002';//目标服务器登录地址
export const vueBase = 'http://127.0.0.1:5003';
 
// 参考文档 https://github.com/IdentityModel/oidc-client-js/wiki
 
 
export const openIdConnectSettings = {
    authority: `${identityServerBase}`, // 认证服务器
    client_id: `Vue_Client`, // 表示客户端的ID，必选项
    client_secret: `Vue_Client_Secret`,
    redirect_uri: `${vueBase}/CallBack`,// 表示重定向URI，认证服务器回调的客户端页面。可选项
    post_logout_redirect_uri: `${vueBase}`,
    silent_redirect_uri: `${vueBase}/redirect-silentrenew`,
    scope: 'openid profile api1 offline_access', // 表示申请的权限范围，可选项
    response_type: `code`,
    //automaticSilentRenew: true,
};