export const apiSourceIpPort = 'https://localhost:6001';//目标服务器登录地址
 
// 参考文档 https://github.com/IdentityModel/oidc-client-js/wiki
 
 
export const apiSourceConnectSettings = {
    apiEndpointIpPort: `${apiSourceIpPort}`, // 认证服务器
    client_id: `Vue_Client`, // 表示客户端的ID，必选项
    client_secret: `Vue_Client_Secret`,
};