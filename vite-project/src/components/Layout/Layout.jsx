import React from "react";
import Header from "../Header";



const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      {/* //<Helmet> */}
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      {/* </Helmet> */}
      <Header />
      <main style={{ minHeight: "75vh" }}>
         {/* <Toaster />  */}

        {children}
      </main>
      
    </div>
  );
};

Layout.defaultProps = {
  title: "Blogger-app",
  description: "vite-app project",
  keywords: "mern,react,node,mongodb",
  author: "Sharmila",
};

export default Layout;