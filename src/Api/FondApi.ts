//导入API
import { get, post, getDynamicynamic, getFileUseBlobByPost } from '@/request/http';


 const testGetApi = (p: any) => get('/api/Fond/GetContactsByEvent', p);

export { testGetApi };
