// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });





    const swiperTitle1 = document.getElementById("moji");
    const titleText1 = "スライド" + swiper.realIndex + "表示しています";
    let titleElement1 = document.createTextNode(titleText1);
    swiperTitle1.appendChild(titleElement1);


    swiper.on('slideChange', function () {
	console.log(swiper.realIndex);

	    if(titleElement1){
		    titleElement1.remove();
	    }
	    const titleText = "スライド" + swiper.realIndex + "を表示しています。";
	    titleElement1 = document.createTextNode(titleText);
	    
	    swiperTitle1.appendChild(titleElement1);
    

    });





    //二つ目のスワイパー
    const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });

    const titleList = [
	"ブランコ少年",
	"ブランコ少女",
	"ブランコ笑顔",
    ];


    　//スライドが切り替わった時に呼び出されるように　onメソッド　を使ってイベントを受け取る
	const swiperTitle2 = document.getElementById("moji2");
	const titleText2 = titleList[swiper2.realIndex];
	let titleElement2 = document.createTextNode(titleText2);
	swiperTitle2.appendChild(titleElement2);

	 
	swiper2.on('slideChange', function () {
		console.log("slide changed");

		if(titleElement2){
			titleElement2.remove();
		}
		const titleText = titleList[swiper2.realIndex];
		titleElement2 = document.createTextNode(titleText);
		
		swiperTitle2.appendChild(titleElement2);
	

	});



import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

	validator
	.addField('#basic_name', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'minLength',
		errorMessage: '3文字以上入力してください。',
		value: 3,
	},
	{
		rule: 'maxLength',
		errorMessage: '15文字以上入力しないでください。',
		value: 15,
	},
	])
	.addField('#basic_email', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'required',
	},
	{
		rule: 'email',
	},
	])
	.addField('#basic_password', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'password',
	},
	])
	.addField('#basic_age', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'number',
	},
	{
		rule: 'minNumber',
		value: 18,
	},
	{
		rule: 'maxNumber',
		value: 150,
	},
	])
	.addField('#basic_address', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	])
	.onSuccess(onSuccess);

	function onSuccess(event) {
		let formData = new FormData(event.target);
		console.log(formData.get("name"));
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("address"));
	};