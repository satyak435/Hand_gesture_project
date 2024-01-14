Webcam.set({
    width:350,
    height:300,
    image_format:'png',
});
camera=document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GTjzQA-E8/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is:"+prediction_1;
    speak_data_2="And the second predicion is:"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('result_gesture_name').innerHTML=results[0].label;
        document.getElementById('result_gesture_name_2').innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Down")
        {
            document.getElementById('update_gesture').innerHTML="&#9759";
        }
        if(results[0].label=="peace")
        {
            document.getElementById('update_gesture').innerHTML="&#9996";
        }
        if(results[0].label=="wave")
        {
            document.getElementById('update_gesture').innerHTML="&#128075";
        }
    
        if(results[1].label=="Down")
        {
            document.getElementById('update_gesture_2').innerHTML="&#9759";
        }
        if(results[1].label=="peace")
        {
            document.getElementById('update_gesture_2').innerHTML="&#9996";
        }
        if(results[1].label=="wave")
        {
            document.getElementById('update_gesture_2').innerHTML="&#128075";
        }
    }
    }