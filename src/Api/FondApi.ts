//导入API
import { get, post, getDynamicynamic, getFileUseBlobByPost } from '@/request/http';


 const GetFondByEvent = (p: any) => get('/api/Fond/GetContactsByEvent', p);
 const GetEventsByInitiator = (p: any) => get('/api/Fond/GetEventsByInitiator', p);

export { GetFondByEvent,GetEventsByInitiator };
