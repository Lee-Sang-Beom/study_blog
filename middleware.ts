import {withAuth} from "next-auth/middleware";

// nextauth에서 주는 토큰을 받으려면
// withAuth로 function middle ware를 감싸야함
export default withAuth(function middleware(req){},{
    callbacks:{
        authorized: ({token, req})=>{
            if(req.nextUrl.pathname.includes("blog-admin")){
                if(token){
                    return true;
                } else{
                    return false;
                }
            } 
            return false;
        }
    }
})

// config file -> match에서 지정한 blog-admin 하위 path만 
// withAuth=>middleware 하위 callbacks를 실행할 수 있도록 함 
export const config = {
    matcher : ["/blog-admin/:path*"],
};