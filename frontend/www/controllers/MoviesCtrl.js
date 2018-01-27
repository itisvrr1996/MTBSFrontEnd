angular
    .module('starter.controllers')
    .controller('MoviesCtrl', MoviesCtrl)


function MoviesCtrl($scope,$state,$ionicHistory) {
    $scope.genre = '';
    $scope.language = '';
    $scope.city = '';

    $scope.GoBack = function () {
        $ionicHistory.goBack();
        
    }

    $scope.reset = function () {
        console.log('called on reset');
        
        $scope.selectedMovies = $scope.movies;
    }

    $scope.book = function (movie) {
        console.log('Booking movie',movie);
        let m = angular.toJson(movie);
        $state.go('app.movieDetail',{movie:m});
    }

    $scope.selectGenre = function (oldValue, newValue) {
        
        $scope.selectedMovies = _($scope.movies).filter({ 'genre': newValue }).value();
        console.log($scope.selectedMovies);
    }
    $scope.selectLanguage= function (oldValue, newValue) {
        $scope.selectedMovies = _($scope.movies).filter({ 'language': newValue }).value();
        console.log($scope.selectedMovies);
    }
    $scope.selectCity = function (oldValue, newValue) {

        $scope.selectedMovies = _($scope.movies).filter({ 'city': newValue }).value();
        console.log($scope.selectedMovies);
    }

    $scope.movies = [{ "movieName": "City Streets", "genre": "Crime|Film-Noir", "language": "Tajik", "movieImage": "http://dummyimage.com/250x250.bmp/dddddd/000000", "city": "Bilice" },
    { "movieName": "The Baby Maker", "genre": "Drama", "language": "Kazakh", "movieImage": "http://dummyimage.com/250x250.bmp/cc0000/ffffff", "city": "Nevers" },
    { "movieName": "Snake Pit, The", "genre": "Drama", "language": "Oriya", "movieImage": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "city": "Kramarzówka" },
    { "movieName": "Last American Hero, The", "genre": "Action|Drama", "language": "Ndebele", "movieImage": "http://dummyimage.com/250x250.bmp/dddddd/000000", "city": "Fengshan" },
    { "movieName": "League of Gentlemen, The", "genre": "Adventure|Comedy|Crime|Drama", "language": "Bulgarian", "movieImage": "http://dummyimage.com/250x250.png/ff4444/ffffff", "city": "Makubetsu" },
    { "movieName": "Flodder 3", "genre": "Comedy", "language": "Chinese", "movieImage": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "city": "Montpellier" },
    { "movieName": "Little Girl (La pivellina)", "genre": "Drama", "language": "Nepali", "movieImage": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "city": "Taltal" },
    { "movieName": "Capricorn One", "genre": "Drama|Sci-Fi|Thriller", "language": "Malayalam", "movieImage": "http://dummyimage.com/250x250.png/5fa2dd/ffffff", "city": "Lengshui" },
    { "movieName": "Hell Drivers", "genre": "Drama", "language": "Nepali", "movieImage": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "city": "Varberg" },
    { "movieName": "Comme un chef", "genre": "Comedy", "language": "Burmese", "movieImage": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff", "city": "Moba" },
    { "movieName": "Tupac: Resurrection", "genre": "Documentary", "language": "Danish", "movieImage": "http://dummyimage.com/250x250.png/5fa2dd/ffffff", "city": "Cavan" },
    { "movieName": "Caretakers, The", "genre": "Drama", "language": "Hungarian", "movieImage": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "city": "Tambov" },
    { "movieName": "Machine, The", "genre": "Sci-Fi|Thriller", "language": "Northern Sotho", "movieImage": "http://dummyimage.com/250x250.png/dddddd/000000", "city": "Tabouda" },
    { "movieName": "Blown Away", "genre": "Action|Thriller", "language": "Maltese", "movieImage": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff", "city": "Enewetak" },
    { "movieName": "Gambling City", "genre": "Crime|Drama", "language": "Italian", "movieImage": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff", "city": "Vabalninkas" },
    { "movieName": "Hella W", "genre": "Drama", "language": "Tajik", "movieImage": "http://dummyimage.com/250x250.bmp/dddddd/000000", "city": "Oli" },
    { "movieName": "Look Who's Talking", "genre": "Comedy|Romance", "language": "Azeri", "movieImage": "http://dummyimage.com/250x250.png/dddddd/000000", "city": "Xijiao" },
    { "movieName": "Charlie Chan in Rio", "genre": "Comedy|Crime|Mystery|Thriller", "language": "Dutch", "movieImage": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "city": "Pacet" },
    { "movieName": "Ladies in Lavender", "genre": "Comedy|Drama|Romance", "language": "Pashto", "movieImage": "http://dummyimage.com/250x250.bmp/5fa2dd/ffffff", "city": "Lümeng" },
    { "movieName": "Secret Beyond the Door", "genre": "Drama|Film-Noir|Mystery|Thriller", "language": "Japanese", "movieImage": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "city": "Klenak" },
    { "movieName": "The Lazarus Effect", "genre": "Horror|Thriller", "language": "Macedonian", "movieImage": "http://dummyimage.com/250x250.bmp/ff4444/ffffff", "city": "Beisijia" },
    { "movieName": "California Solo", "genre": "Drama", "language": "Swati", "movieImage": "http://dummyimage.com/250x250.png/5fa2dd/ffffff", "city": "Troitskiy" },
    { "movieName": "Mistaken for Strangers", "genre": "Comedy|Documentary", "language": "Filipino", "movieImage": "http://dummyimage.com/250x250.jpg/cc0000/ffffff", "city": "Bueng Khong Long" },
    { "movieName": "The Army", "genre": "Drama", "language": "Kashmiri", "movieImage": "http://dummyimage.com/250x250.bmp/cc0000/ffffff", "city": "Shōbara" },
    { "movieName": "Decasia: The State of Decay", "genre": "Documentary", "language": "Bosnian", "movieImage": "http://dummyimage.com/250x250.jpg/ff4444/ffffff", "city": "Pontian" }]

    $scope.cities = _($scope.movies).map('city').uniq().sort().value();
    $scope.genres = _($scope.movies).map('genre').uniq().sort().value();

    $scope.languages = _($scope.movies).map('language').uniq().sort().value();
    $scope.selectedMovies = $scope.movies;

}