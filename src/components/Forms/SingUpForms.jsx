import { containerStyle,
         titleStyle,
         labelInputRow,
         labelStyle,
         inputStyle
 } from "../../styles/FormStyles";
 import Logo from "../../assets/images/Login/Logo.svg";

 export default function SignUpFroms({ userType }) {
    return (
    <div style={containerStyle}>

    <img src={Logo} alt="Logo" style=
    {{
    width: "120px",
    marginBottom: "20px",
    alignSelf: "center",
    transform: "translateX(5px)" 
    }}/>

      <h2 style={titleStyle}>
        Deseja adotar um pet? Faça login na sua conta!
      </h2>

      <div style={labelInputRow}>
        <label style={labelStyle}>SEU EMAIL</label>
      </div>

      <input type="email" placeholder="Digite seu email" style={inputStyle} />

      <div style={labelInputRow}>
        <label style={labelStyle}>SEU NOME</label>
      </div>

      <input type="name" placeholder="Digite seu nome" style={inputStyle} />
    
       <div style={labelInputRow}>
        <label style={labelStyle}>CRIE UMA SENHA</label>
      </div>

      <input type="password" placeholder="Digite sua senha" style={inputStyle} />

      <div style={labelInputRow}>
      </div>

      <input type="password" placeholder="Repita sua senha" style={inputStyle} />

    </div>
    )
 }