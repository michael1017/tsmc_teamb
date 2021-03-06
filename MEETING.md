
# Bionic Beaver

## Member
- AAID	RDIT	顏价廷 frontend
- BSID	CPSD	謝昀芯 dialogflow+chatbot
- ICSD	HCCD-2	蔡均宜 backend
- TSID	APESD	劉哲維 backend
- TSID	F12-MITD	黃文遠 dialogflow+chatbot
- TSID	MQSI	楊晶宇 (隊長)frontend
- TSID  NTAP 許郁彬 (Mentor)

https://hackathon.gw.f12gpaas.tsmc.com.tw/

## 評分項目

- Business Value / User Story	...... 15%
- Innovation	...... 15%
- System Design	...... 35%
- Implementation / Engineering Skill	...... 20%
- Demo & Presentation	...... 15%

## 重要時程

~~7/16
繳交隊名與組長~~

~~7/23
繳交題目~~

8/2
繳交組別介紹詞
比賽當天主持人在各組出場時會簡短介紹(大概兩三句)
每組要交一頁ppt 介紹你們的題目與內容，一頁就好

提供 GitHub Repo 給評審

8/12
成果競賽

## 參考資料

### DialogFlow

一系列的 DialogFlow 教學
https://www.youtube.com/channel/UCmBGWgaTx1_KwbNm2PJF0_A/videos

官方文件
https://cloud.google.com/dialogflow/es/docs/fulfillment-overview


## Related Skill

### GitHub

- git
- Public Repo (includes Meeting logs)
- gitflow
- Pull Request with code review

### Development

- Unit Test
- Pair Programming (vscode Live Share)

### API Document

- OpenAPI 

### CI/CD

- Jenkins / Drone
	
### Deployment

- container
- K8s
- AWS EKS

## 會議紀錄
- Gather : https://gather.town/invite?token=WkwhrNkS
- pw: teamb

### 07/14 會議記錄
1. 公司地圖指引 (標示位置, 環景照片)
出發點：新進廠區的員工可能對廠區樓層配置不熟悉
user story : 使用者選擇廠區、樓層後 ，會顯示該樓層的配置圖，可以點擊地圖上的位置標記，觀看環景照片，讓使用者更好認識環境
2. help desk chatbot(關鍵字查詢, 自動回答問題)
出發點:透過使用者的關鍵字可以推測出使用者的問題是什麼，就不用每個問題都上系統回報和請專人協助，而使用者也能24小時得到解答
user story:
身為一個電腦系統上有使用問題的員工，我想要快速找到問題並得到解答，讓我可以不用每個問題都請專人回覆，有機會可以自己解決

 

    Given 一個電腦系統上有使用問題的員工
    When 打開helpdesk chatbot並輸入有問題的系統or設備
    Then 追問&回答該系統或設備最常發生的問題提供員工選擇
    When 使用者詳述問題
    Then chatbot回答問題
    When 使用者選擇報修
    Then 詢問使用者資料,與可以與專人對話時間,自動報修
5. Topic: Chrome extension for 168交通網—透過Chrome擴充功能讓網頁版的168也具備乘車提醒並顯示戶外及時天氣
User Story:
作為一個需要搭乘廠車的員工
我想要透過網頁版168設定乘車提醒並了解戶外及時天氣
如此我就可以準時乘車並因應天氣做好措施(攜帶雨具、外套等)

    Given 在辦公室正在使用電腦且即將要搭廠車前往其他廠區的員工
    When 打開168並使用該extension
    Then 指引使用者選擇欲搭乘的車次與乘車前提醒時間
    When 使用者設定好車次與提醒時間
    Then 開始對時
    When 提醒時間到
    Then 顯示彈出式視窗提醒搭車並顯示及時戶外天氣
    
7. 組長/組名

### 7/20 會議記錄

投票決定要做chatBOT
討論chatBot解決的痛點(跟現在IT case center的QA搜尋有甚麼差)
Ans : 希望有即時性、精確回答使用者問題、手機介面較簡潔

打算分成2介面:
1.給使用者聊天的介面
2.服務人員更新即時訊息(VPN系統維修...等)、分類問題

### 7/21 會議記錄

dialogflow 
目前使用 telegram 作為 platform
todo: try up webhook

MERNstack 做服務端編輯頁面

https://cloud.google.com/dialogflow/es/docs/basics
https://www.appcoda.com.tw/chatbot-dialogflow-ios/
https://ithelp.ithome.com.tw/articles/10248280
https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook

### 7/22 會議紀錄
流程:

given a user who have question
when ask a question in chatroom
then the user can be replied
when the user ask a question which is never answered
then (send a link) or (chat bot ask user contact info)
when user (click the link and ask his/her questions) or (answer the question from chatbot)
then the question and user contact info send to our database

given a manager who answer question
when he/her sees the users' questions in database (webpage)
then he/her can answer their questions by their info

project name:
helpdesk 智能IT客服

### 7/23 會議紀錄

決定分工

#### Frontend

- 顏价廷
- 楊晶宇

#### Backend

- 蔡均宜
- 劉哲維

#### Chatbot

- 謝昀芯
- 黃文遠

### 7/27 會議紀錄

Bot demo project
https://github.com/yubinTW/bot-demo

user story:

1. 使用者開始與bot對話
2. bot詢問使用者問題屬於的系統(Outlook、PC/NB......)
3. bot請使用者輸入問題描述
4. bot根據使用者輸入的問題搜尋相關的答案，並詢問使用者回應是否有幫助到他
5. 若使用者回答是，對話結束;若使用者回答否，則bot詢問是否幫忙新增報修單
6. 若使用者回答是，bot詢問使用者手機號碼並將「使用者名稱」、「問題所屬之系統」、 「問題描述」、「手機號碼」一併送至後端server
------------------------------------------
7. 管理者介面功能:新增報修單、刪除報修單、編輯維修進度、查詢使用者名稱 https://www.figma.com/file/nBCZJMzlJN3rJWAKdyQlIn/Untitled?node-id=0%3A1

下次開會時間: 7/29 13:30
deadline: 8/2

----------------------------------------
前端需要的data:
報案單號、姓名、部門、工號、連絡電話、報案時間、狀態(待處理、維修中、已維修)、案件描述、維修紀錄(如果後端有辦法的話希望可以做time stamp)

### 7/29 會議紀錄

前端：

後端：
![](https://i.imgur.com/gEA1Pkm.png)


bot:
串接大致完成，使用者名稱偵測不靈敏
![](https://i.imgur.com/RgDkt31.png)

### 8/2 會議記錄

題目與內容:
https://drive.google.com/file/d/1U1_K47AAOMMZxj0a4dIaNOFuoXOv9RIw/view?usp=sharing
介紹詞:
Bionic Beaver，取名自 ubuntu 18.04 codename，因為原本是team B，所以就找了一個很炫炮B開頭的Ubuntu codename來當組名~

後端：
https://hackmd.io/Or3d3QdXSQqsgf-RC51guw?view

前端API請接這支：https://8871f05b36ce.ngrok.io/api