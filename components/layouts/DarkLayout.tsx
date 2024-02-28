import { FC } from "react";
import { MainLayoutProps } from "./interfaces";

export const BlackLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        color:'white',
        textAlign:'center',
        borderRadius: '5px',
        padding:'10px'
    }}>
      <h3>Black-Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}