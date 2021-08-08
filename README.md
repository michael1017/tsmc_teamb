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
  
### (二) bot<br>  
#### 1. 執行專案
```
(1)進入bot/src資料夾: cd bot/src/
(2)編輯.env檔案，內容詳見下方2. QnA Maker設定
(3)回到bot資料夾: cd ..
(2)執行指令：npm install
(3)執行指令: npm run build
(4)執行指令: npm run start
(5)開啟 dialogflow 進入 fulfillment
(6)開啟 webhook 功能並填入與 bot 互動之後端 URL
```
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/bot-1.png" width="90%"><br>

#### 2. QnA Maker 設定:
(1)建立QnA Maker knowledge base https://www.qnamaker.ai/Create<br>
(2)點入剛剛建立的knowledge base頁面<br>
(3-1) 匯入問答集→進入Settings，在Import knowledge base處匯入bot/data/IT_qna_data.xlsx<br>
(3-2) 手動新增問答→進入Edit，點選Add QnA pair，即可新增問答<br>
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/bot-2.png" width="90%"><br>
(4)匯入問答集/新增完問答後，點選Publish<br>
(5)編輯bot/src/.env檔案，填入對應的QNAMAKER_KEY、QNAMAKER_ENDPOINT以及kbid<br>
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/bot-3.png" width="90%"><br>
ps. Azure service id可在My knowledge bases頁面可見<br>

#### 3. 加入Telegram機器人
(1)在聯絡人頁面中搜尋 @tsmc_testbot<br>
(2)點選「開始」以啟用Chatbot<br>
(3)即可開始向Helpdesk 智能IT客服詢問問題<br>
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/bot-4.jpg" width="90%">

#### 4. Chatbot 架構
<img src="https://github.com/michael1017/tsmc_teamb/blob/dev/pics/bot-5.png" width="90%">
* **welcome intent**: 當使用者對 Chatbot 打招呼，Chatbot 詢問使用者遇到什麼問題
* **question intent**: 接受使用者的問題後從 Azure QnA Maker 尋找問題答案，並將答案回傳給使用者
* **continue intent**: 詢問使用者是否得到幫助
* **ask report intent**: 詢問使用者是否需要報案
* **report intents**: 詢問使用者工號，手機電話和部門名稱
* **confirm intent**: 詢問使用者輸入資料是否正確，若資料不正確則開始重新輸入
* **fallbacks**: 當 Chatbot 無法辨識使用者意圖，則會進入 fallback 詢問使用者相同問題，並提供選項讓使用者回答
  
### (三) back end<br>
```
(1)backend: cd backend
(2)執行指令: npm install
(3)執行指令: tsc
(4)執行指令: npm run start
```
API Spec : https://8871f05b36ce.ngrok.io/documentation/
