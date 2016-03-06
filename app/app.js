(function(){
	'use strict';

	angular
		.module("mapa", [])
		.directive('mapaDf',mapaDf);	//directiva para mapa

	
	function mapaDf(){
		var directive = {
			restrict: 'EA',
			templateUrl: '/partials/mapadf.html',
			controller: mapaController,
			controllerAs: 'mapa',
			bindToController: true,
			replace: true
		};
		return directive;
	}


	mapaController.$inject= ["$scope"]
	function mapaController($scope){
		var mapa=this;

		mapa.list=[
			{'id':"MX-AGU", 'name':'aguascalientes'},
			{'id':"MX-BCS", 'name':'baja california suer'},
			{'id':"MX-CAM", 'name':'cancun'},
			{'id':"MX-CHP", 'name':'chiapas'},
			{'id':"MX-CHH", 'name':'chihuahua'},
		]

		mapa.over=null;

		var paths = d3.selectAll("path");
		paths.style("fill", "#861975");

		paths.on('mouseover', function(){
			mapa.over=this.id;
			d3.select(this).style("fill","#384742");
			$scope.$apply();
		});

		paths.on('mouseout', function(){
			d3.select(this).style("fill","#861975");
		});
	}

})();