// 'use strict';

// /**
//  * @ngdoc function
//  * @name yoApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the yoApp
//  */
// angular.module('yoApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//     $scope.width = '900px';
//   });

(function() {
  'use strict';
  angular
    .module('yoApp')
    .controller('MainCtrl', MainCtrl)
    .animation('.slide-left-animation', function ($window) {
    return {
        enter: function (element, done) {
            TweenMax.fromTo(element, 1, { left: $window.innerWidth}, {left: 0, onComplete: done});
        },
        leave: function (element, done) {
            TweenMax.to(element, 1, {left: -$window.innerWidth, onComplete: done});
    }
};
});
//     .animation('.slide-animation', function () {
//         return {
//             beforeAddClass: function (element, className, done) {
//                 var scope = element.scope();

//                 if (className == 'ng-hide') {
//                     var finishPoint = element.parent().width();
//                     if(scope.direction !== 'right') {
//                         finishPoint = -finishPoint;
//                     }
//                     TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
//                 }
//                 else {
//                     done();
//                 }
//             },
//             removeClass: function (element, className, done) {
//                 var scope = element.scope();

//                 if (className == 'ng-hide') {
//                     element.removeClass('ng-hide');

//                     var startPoint = element.parent().width();
//                     if(scope.direction === 'right') {
//                         startPoint = -startPoint;
//                     }

//                     TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
//                 }
//                 else {
//                     done();
//                 }
//             }
//         };
// });
//     .animation('.slide-animation', .slide-animation);

//     function .slide-animation() {
//     	return {
//             addClass: function (element, className, done) {
//                 if (className == 'ng-hide') {
//                     TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
//                 }
//                 else {
//                     done();
//                 }
//             },
//             removeClass: function (element, className, done) {
//                 if (className == 'ng-hide') {
//                     element.removeClass('ng-hide');
//                 TweenMax.set(element, { left: element.parent().width() });
//                 TweenMax.to(element, 0.5, {left: 0, onComplete: done });
//             }
//             else {
//                 done();
//             }
//         }
//     };
// };

  MainCtrl.$inject = ['$scope', '$interval'];

  function MainCtrl($scope, $interval){
    var vm = $scope;

    // vm.slides = slides;

    // //index stuff
    // vm.currentIndex = currentIndex;
    vm.setCurrentSlideIndex = setCurrentSlideIndex;
    vm.isCurrentSlideIndex = isCurrentSlideIndex;
    // vm.prevSlide = prevSlide;
    vm.nextSlide = nextSlide;
    vm.callNext = callNext;
    // vm.direction = direction;

    var INTERVAL = 3000;
    
    vm.slides = [
    	{image: 'sliderImage2.png', description: 'Image 00'},
   	    {image: 'slideImage1.jpg', description: 'Image 01'},
        {image: 'sliderImage3.png', description: 'Image 02'},
        {image: 'kobeeee.jpg', description: 'Image 03'}
    ];

    //index stuff continued
    vm.currentIndex = 0;
    vm.direction = 'left';
   	setCurrentSlideIndex = function (index) {
        vm.currentIndex = index;
    };

    function setCurrentSlideIndex(index) {
    	vm.direction = (index > vm.currentIndex) ? 'left' : 'right';
    	vm.currentIndex = index;
    }
    // $scope.isCurrentSlideIndex = function (index) {
    //     return $scope.currentIndex === index;
    // };
    function isCurrentSlideIndex(index) {
    	return vm.currentIndex === index;
    }
    // $scope.prevSlide = funcintervaltion () {
    //     $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    // };
    // $scope.nextSlide = function () {
    //     $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    // };
    // function prevSlide() {
    // 	console.log(vm.currentIndex);
    // 	$interval(callNext, 3000);
    // }

    function callNext() {
        console.log(vm.currentIndex);
        vm.direction = 'left';
        vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
    }

    function nextSlide() {
    	console.log(vm.currentIndex);
    	$interval(callNext, 3000);
    }

    //===========animations========

    vm.setCurrentAnimation = setCurrentAnimation;
    vm.isCurrentAnimation = isCurrentAnimation;

    vm.currentAnimation ='slide-left-animation';

    function setCurrentAnimation(animation) {
        vm.currentAnimation = animation;
    }
    function isCurrentAnimation(animation) {
        return vm.currentAnimation === animation;
    }

//calls this stuff when page loads
    vm.$on('$viewContentLoaded', function() {
        console.log(vm.currentIndex);
        $interval(callNext, 3000);
    })



  }
})();
