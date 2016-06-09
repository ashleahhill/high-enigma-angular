const $inject = [];
/*
 * @ngdoc service
 * @name NavItems
 */
const NavItems = function () {
  this.items = [
  	{
  		label: 'me',
  		url: '/resume'
  	},
  	{
  		label: 'doodles.',
  		url: '/stuff'
  	}
  ];
};

NavItems.$inject = $inject;

export default NavItems;
