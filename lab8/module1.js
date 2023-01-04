var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/doctor",{
		templateUrl:'views/doctors.html',
		controller:'doctor_ctr'
	}).
	when("/patient",{
		templateUrl:'views/patients.html',
		controller:'patient_ctr'
	}).
	when("/service",{
		templateUrl:'views/services.html',
		controller:'service_ctr'
	}).
	when("/gallery",{
		templateUrl:'views/gallery.html',
		controller:'gallery_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("doctor_ctr",function($scope){
	
	$scope.doctors = [
		{name:'Dr.Sandra',age:42,qualification:'MBBS,MDS'},
		{name:'Dr.Christina',age:35,qualification:'MBBS,MDS'},
		{name:'Dr.Chang',age:39,qualification:'MBBS,MDS'},
		{name:'Dr.Kanti',age:48,qualification:'MBBS,MDS'},
		{name:'Dr.Shakti',age:60,qualification:'MBBS,MDS'},
	];
	
});

app.controller("patient_ctr",function($scope){
	
	$scope.patients = ["Andrea","Ashwati","Athira","Anila","Ajai","Sumit","Sri","Richie","Hiran","Sneha"];
	
});

app.controller("service_ctr",function($scope){
	
	$scope.services = ["Bone and Joint Health","Hip Replacement","Joint Replacement","Knee Replacement","Orthopaedics","Podiatry","Rheumatology","Sports Medicine"];
	
});

app.controller("gallery_ctr",function($scope){
	
	$scope.pic1 = "images/ct_main.jpg";
	$scope.pic2 = "images/dr.sandra.png";
	$scope.pic3 = "images/dr.christina.png";
	
});



