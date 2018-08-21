import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'participant-card',
	templateUrl: './participant-card.component.html',
	styleUrls: ['./participant-card.component.scss'],
})
export class ParticipantCardComponent implements OnInit {
	id: number;
	major: string;
	college: string;
	age: number;
	height: number;
	weight: number;
	horoscope: string;
	smoke: string;
	description: string;

	majors = ["Arts Management", "Education", "Emergency Management", "English/Writing", "Equine Science/Mgmt", "Family & Child Science", "History", "Journalism", "Language Studies", "Non-Profit Management", "Peace/Conflict Studies", "Philosophy", "Political Science", "Social Science", "Sports Turf/Golf Mgmt", "Women/Gender Studies", "Apparel/Textile Design", "Architecture", "Dance", "Film/Broadcast", "Fine/Studio Art", "Graphic Design", "Industrial Design", "Interior Design", "Landscape Architecture", "Music", "Theatre", "Urban Planning", "Video Game Design", "Web Design/Digital Media", "Aerospace Engineering", "Astronomy", "Aviation/Aeronautics", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Science", "Electrical Engineering", "Energy Science", "Engineering", "Imaging Science", "Industrial Engineering", "Industrial Technology", "Materials Science", "Mathematics", "Mechanical Engineering", "Accounting - General", "Business - General", "Construction Management", "Finance & Economics", "Hospitality Management", "Human Resources Mgmt", "Information Systems (MIS)", "Insurance & Risk Mgmt", "National Parks Management", "Public Health Administration", "Sport Management", "Supply Chain Mgmt (Logistics)"];
	unis = ["HKU", "CUHK", "HKUST", "CityU", "PolyU", "HKBU", "EdU", "OpenU", "LingU", "HKSYU", "ChuHaiU"];
	horoscopes = ["白羊座", "射手座", "魔羯座", "水瓶座", "金牛座", "雙子座", "巨蟹座", "獅子座", "處女座", "天秤座", "天蠍座", "雙魚座"];
	smokes = ["抽煙", "不抽煙"]
	desc = [
		"最初不相識，最終不相認。",
		"走完同一條街，回到兩個世界。",
		"在原諒與絕望之間遊盪，唯一的感覺是傷 傷 傷！",
		"有些事一轉身就一輩子。",
		"有些人會一直刻在記憶里的，即使忘記了他的聲音，忘記了他的笑容，忘記了他的臉，但是每當想起他時的那種感受，是永遠都不會改變的。",
		"有時，愛也是種傷害。殘忍的人，選擇傷害別人，善良的人，選擇傷害自己。",
		"一念起，萬水千山。一念滅，滄海桑田。",
		"一個人總要走陌生的路，看陌生的風景，聽陌生的歌，然後在某個不經意的瞬間，你會發現，原本費盡心機想要忘記的事情真的就這麼忘記了。",
		"幸福對我說，你還太小。",
		"心不動，則不痛。",
		"想你的時候有些幸福，幸福得有些難過。",
		"喜歡一個人沒有錯，錯就錯在喜歡一個不喜歡自己的人。",
		"無法拒絕的是開始，無法抗拒的是結束。",
		"我真的愛你，閉上眼，以為我能忘記，但流下的眼淚，卻沒有騙到自己。",
		"我在過馬路，你人在哪裡。",
		"我贏了所有人，但卻輸掉了你。",
		"我想哭，可是我已經不知道該怎麼流淚了。",
		"我忘了哪年哪月的哪一日 我在哪面牆上刻下一張臉 一張微笑著 憂傷著 凝望我的臉。",
		"我們微笑著說 我們停留在時光的原處 其實早已被洪流無聲地捲走。",
		"我放下了尊嚴，放下了個性，放下了固執，都只是因為放不下你。",
		"痛過之後就不會覺得痛了，有的只會是一顆冷漠的心。",
		"聽悲傷的歌，看幸福的戲。",
		"他的心早已變換了季節，而你還站在他許下諾言的那一天。",
		"所謂最難忘的，就是從來不曾想起，卻永遠也不會忘記。",
		"思念一個人的滋味，就象是喝了一杯冰冷的水，然後一滴一滴凝成熱淚。",
		"誰把誰真的當真，誰為誰心疼。",
		"時間沒有等我，是你忘了帶我走。",
		"上一次微笑著入睡是什麼時候？",
		"人生最遺憾的，莫過於，輕易地放棄了不該放棄的，固執地，堅持了不該堅持的。",
		"人生若只如初見，當時只道是尋常。",
		"情如潮，淚如濤，心碎成傷，風燭搖。音容宛未消。",
		"你走的那天，我決定不掉淚，迎著風撐著眼帘用力不眨眼。",
		"你永遠也看不到我最寂寞時候的樣子，因為只有你不在我身邊的時候，我才最寂寞。",
		"你是我猜不到的不知所措，我是你想不到的無關痛癢。",
		"你來過一下子，我想念一輩子。",
		"那些以前說著永不分離的人，早已經散落在天涯了。",
		"沒有什麼過不去，只是再也回不去。",
		"落葉悲，悲落葉。心似雙絲網，終有千千結。",
		"淋過雨的空氣，疲倦了的傷心，我記憶里的童話已經慢慢的融化。",
		"臉上的快樂，別人看得到。心裡的痛又有誰能感覺到。",
		"經不住似水流年，逃不過此間少年。",
		"記憶想是倒在掌心的水，不論你攤開還是緊握，終究還是會從指縫中一滴一滴流淌乾淨。",
		"和愛的人吵架，和陌生人講心裡話。",
		"多謝你的絕情，讓我學會死心。",
		"等待你的關心，等到我關上了心。",
		"等待…也許並不容易；傷害…卻輕而易舉。",
		"當眼淚流下來，才知道，分開也是另一種明白。",
		"當浸泡在內心深處的回憶，勾勒出輕描淡寫的美麗，你是我年少時青澀的畫卷。",
		"不要輕易說愛，許下的承諾就是欠下的債！",
		"不是每一次努力都會有收穫，但是，每一次收穫都必須努力，這是一個不公平的不可逆轉的命題。"
	]

	constructor() {
		this.id = Math.floor((Math.random() * 1000) + 1000);
		this.major = this.majors[Math.floor(Math.random() * this.majors.length)];
		this.college = this.unis[Math.floor(Math.random() * this.unis.length)];
		this.age = Math.floor((Math.random() * 13) + 17);
		this.height = Math.floor((Math.random() * 40) + 150);
		this.weight = Math.floor((Math.random() * 40) + 40);
		this.horoscope = this.horoscopes[Math.floor(Math.random() * this.horoscopes.length)];
		this.smoke = this.smokes[Math.floor(Math.random() * this.smokes.length)];
		this.description = this.desc[Math.floor(Math.random() * this.desc.length)];
	}

	ngOnInit() {
	}
}
