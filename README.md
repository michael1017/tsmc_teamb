# 智能IT客服
### 介紹
此project主要是架設一個智能IT客服系統，用戶能夠透過與chatbot詢問問題，得到問題的解法，若資料庫目前沒有問題的解法，chatbot能夠幫助客戶完成報案，並將資料送至後端資料庫，客服人員能夠操作前端網頁去查看、編輯、刪除報案資料，如下圖:<br>
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/%E9%A1%8C%E7%9B%AE%E8%88%87%E5%85%A7%E5%AE%B9.jpg" width="70%"><br>
接下來將以**front end、bot、backend**三個主題介紹實作方式：<br>
### (一) front end<br>
```
(1)首先進入frontend資料夾: cd frontend/
(2)執行指令：npm install
(3)執行指令: npm run build
(4)執行指令: npm run start
```
做完上述步驟後，便能打開客服人員的操作介面: FAQ Manerger (下圖為操作說明)<br>
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/front%20end.jpg" width="90%"><br>
  
### (二) back end<br>
```
(1)backend: cd backend
(2)執行指令: npm install
(3)執行指令: tsc
(4)執行指令: npm run start
```
API Spec : https://8871f05b36ce.ngrok.io/documentation/
