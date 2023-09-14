import style from "./chat.module.css";
import SendIcon from "@mui/icons-material/Send"
import {Input} from "@mui/material"

const Chat = () => {
  return (
    <div>
      <div className={style["chat-container"]}>
        <div className={style["chat-body"]}>ola</div>
        <div className={style["chat-footer"]}>
            <Input
            placeholder="Mensagem" fullWidth></Input>
            <SendIcon sx={{m:1, cursor: "pointer"}} style={{color: "#129d93"}}>
            </SendIcon>
        </div>
      </div>
    </div>
  );
};

export default Chat;
