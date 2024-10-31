import{r as i,j as e,c as E,S as n,b as w,F,f as I}from"./index-DozfNlGT.js";import{M as z,C as k}from"./Datatable-BHTwNKHC.js";const B=({procedimiento:c,handleSubmit:N,buttonForm:f,processes:j=[]})=>{const[m,h]=i.useState(""),[a,u]=i.useState(""),[p,l]=i.useState(""),[v,x]=i.useState("Activo"),[t,y]=i.useState({}),[P,g]=i.useState(null);i.useEffect(()=>{c?(h(c.nombre_procedimiento||""),u(c.id_proceso||""),l(c.nombre_directorio_procedimiento||""),x(c.estado||"Activo"),g(c.id_procedimiento||null)):_()},[c]);const S=()=>{const r={};return(!m||m.length<3)&&(r.nombreProcedimiento="El nombre del procedimiento es obligatorio y debe tener al menos 3 caracteres."),a||(r.idProceso="Debes seleccionar un proceso."),(!p||p.length<3)&&(r.nombreDirectorioProcedimiento="El directorio es obligatorio y debe tener al menos 3 caracteres."),y(r),Object.keys(r).length===0},b=r=>{const{name:D,value:o}=r.target;if(!(D==="nombreProcedimiento"&&!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(o)))switch(D){case"nombreProcedimiento":h(o);break;case"idProceso":u(o);break;case"nombreDirectorioProcedimiento":l(o);break;default:x(o)}},A=r=>{r.preventDefault(),S()&&(N(r,{id_procedimiento:P,nombre_procedimiento:m,id_proceso:a,nombre_directorio_procedimiento:p,estado:v}),_())},_=()=>{h(""),u(""),l(""),x("Activo"),g(null),y({})};return e.jsx("div",{className:"form-container",children:e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"nombreProcedimiento",children:"Nombre del Procedimiento:"}),e.jsx("input",{id:"nombreProcedimiento",type:"text",name:"nombreProcedimiento",value:m,onChange:b,required:!0,"aria-describedby":"nombreProcedimientoError"}),t.nombreProcedimiento&&e.jsx("span",{id:"nombreProcedimientoError",className:"error",children:t.nombreProcedimiento})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"idProceso",children:"Proceso:"}),e.jsxs("select",{id:"idProceso",name:"idProceso",value:a,onChange:b,required:!0,"aria-describedby":"idProcesoError",children:[e.jsx("option",{value:"",children:"Seleccione un proceso"}),j.map(r=>e.jsx("option",{value:r.id_proceso,children:r.nombre_proceso},r.id_proceso))]}),t.idProceso&&e.jsx("span",{id:"idProcesoError",className:"error",children:t.idProceso})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"nombreDirectorioProcedimiento",children:"Nombre del Directorio:"}),e.jsx("input",{id:"nombreDirectorioProcedimiento",type:"text",name:"nombreDirectorioProcedimiento",value:p,onChange:b,required:!0,"aria-describedby":"nombreDirectorioProcedimientoError"}),t.nombreDirectorioProcedimiento&&e.jsx("span",{id:"nombreDirectorioProcedimientoError",className:"error",children:t.nombreDirectorioProcedimiento})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"estado",children:"Estado:"}),e.jsxs("select",{id:"estado",name:"estado",value:v,onChange:b,children:[e.jsx("option",{value:"Activo",children:"Activo"}),e.jsx("option",{value:"Inactivo",children:"Inactivo"})]})]}),P&&e.jsx("input",{type:"hidden",value:P}),e.jsx("button",{type:"submit",className:"btn-submit",children:f})]})})},O=()=>{const[c,N]=i.useState([]),[f,j]=i.useState(null),[m,h]=i.useState([]),[a,u]=i.useState("Enviar"),[p,l]=i.useState(!1),[v,x]=i.useState(!0);i.useEffect(()=>{t(),y()},[]);const t=async()=>{try{const o=await E.get("/api/procedimientos");N(o.data)}catch(o){console.error("Error al obtener los procedimientos:",o),n.fire("Error","No se pudieron obtener los procedimientos","error")}},y=async()=>{try{const o=await E.get("/api/procesos");h(o.data)}catch(o){console.error("Error al obtener los procesos:",o),n.fire("Error","No se pudieron obtener los procesos","error")}},P=async(o,s)=>{o.preventDefault();const d=S(s);if(d){n.fire("Error",d,"error");return}try{a==="Enviar"?(await E.post("/api/procedimientos",s),n.fire("Agregado!","El procedimiento ha sido agregado.","success")):a==="Actualizar"&&f&&(await E.put(`/api/procedimientos/${f.id_procedimiento}`,s),n.fire("Actualizado!","El procedimiento ha sido actualizado.","success")),g(),l(!1),t()}catch(C){console.error("Error al enviar el formulario:",C),n.fire("Error","No se pudo guardar el procedimiento","error")}},g=()=>{j(null),u("Enviar")},S=o=>{const{nombre_procedimiento:s,id_proceso:d}=o;return!s||s.trim()===""?"El nombre del procedimiento es obligatorio.":d?null:"El ID del proceso es obligatorio."},b=o=>{const s=m.find(d=>d.id_proceso===o);return s?s.nombre_proceso:"Desconocido"},A=[{field:"id_procedimiento",header:"ID",width:"10%"},{field:"nombre_procedimiento",header:"Nombre",width:"50%"},{field:"id_proceso",header:"ID Proceso",width:"20%"},{field:"estado",header:"Estado",width:"20%"}],_=c.map(o=>({...o,id_proceso:b(o.id_proceso)})),r=o=>{j(o),u("Actualizar"),l(!0)},D=async o=>{if((await n.fire({title:"¿Estás seguro?",text:"¡No podrás revertir esto!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Sí, eliminarlo!"})).isConfirmed)try{(await E.delete(`/api/procedimientos/${o.id_procedimiento}`)).status===204?(n.fire("Eliminado!","El procedimiento ha sido eliminado.","success"),t()):n.fire("Error","No se pudo eliminar el procedimiento","error")}catch(d){console.error("Error al eliminar el procedimiento:",d),n.fire("Error","No se pudo eliminar el procedimiento","error")}};return e.jsxs("div",{style:{display:"flex",minHeight:"100vh",backgroundColor:"#f4f4f4"},children:[e.jsx(w,{}),e.jsxs("div",{style:{flex:1,padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("h1",{style:{marginBottom:"20px",fontSize:"2rem",fontFamily:"Georgia, serif",textTransform:"uppercase"},children:"Gestión de Procedimientos"}),e.jsxs("div",{style:{width:"100%",maxWidth:"1200px",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsxs("button",{style:{display:"flex",alignItems:"center",padding:"10px 20px",fontSize:"1rem",backgroundColor:"#4caf50",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",marginBottom:"20px"},onClick:()=>{g(),l(!0)},children:[e.jsx(F,{icon:I,style:{marginRight:"8px"}}),"Añadir"]}),p&&e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:999}}),e.jsx(z,{isOpen:p,onClose:()=>{l(!1),x(!0)},title:a==="Enviar"?"Agregar Procedimiento":"Actualizar Procedimiento",children:e.jsx(B,{procedimiento:f,handleSubmit:P,buttonForm:a,processes:m})}),v&&e.jsx(k,{data:_,columns:A,onEdit:r,onDelete:D,searchField:"nombre_procedimiento",exportFields:["id_procedimiento","nombre_procedimiento","id_proceso","estado"]})]})]})]})};export{O as default};
