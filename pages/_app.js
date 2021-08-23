// import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Skeleton from 'react-loading-skeleton';
import Router from "next/router";
import { Header } from '../components/Header';


function MyApp({ Component, pageProps }) {
  const[loading,setLoading] = useState(false);
  useEffect(()=>{
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  },[])
  return (
    loading === true ? 
      <div>
        <Header/>
        <div style={{
          display:"flex",
          justifyContent:"center",
          alignSelf:"center",
          alignItems:"center",
          flexDirection : "column"
        }}>
        <Skeleton style={{
          flex :1,
          width : '50%',
          margin : 20
        }}   
        width={400}
        height={400} />
        <Skeleton style={{
          flex :1,
          width : '50%'
        }}   
        width={400}
        height={400} />
        </div>
        
      </div>
    :
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp
