import { MainLayoutProps } from "./interfaces";

export const WhiteLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div style={{
        backgroundColor:'white',
        color:'black',
        textAlign:'center',
        borderRadius: '5px',
        padding:'10px'
    }}>
      <h3>White-Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}