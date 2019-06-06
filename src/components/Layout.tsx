import "./index.css"
import "../scss/styles-0-master.scss"
import "../scss/styles-1-large-main.scss"

import React, { FunctionComponent } from "react"

import Footer from "./Footer"
import Header from "./Header"
import Helmet from "react-helmet"
import { registerIcons } from "office-ui-fabric-react"

registerIcons({
  icons: {
    "arrow-circle-left": <i className="fa fa-arrow-circle-left" />,
    bars: <i className="fa fa-bars" />,
    cancel: <i className="fa fa-times" />,
    chevrondown: <i className="fa fa-chevron-down" />,
  },
})

export interface LayoutProps {
  className?: string
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "blue-bg" }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <script src="https://global.localizecdn.com/localize.js" />
        <script>{`
          !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);

          Localize.initialize({
            key: 'localize-key',
            rememberLanguage: true,
            saveNewPhrasesFromSource: true
          });

          // Hotjar Tracking Code for https://adoptopenjdk.net
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:908427,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}</script>
      </Helmet>
      <Header />
      <main className={`grey-bg ${className}`}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
