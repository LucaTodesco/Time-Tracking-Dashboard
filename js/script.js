function getObject(type) {
  switch(type) {
    case "work":
      var json_work = {"title": "Work","timeframes": {"daily": {"current": 5,"previous": 7},"weekly": {"current": 32,"previous": 36},"monthly": {"current": 103,"previous": 128}}};
      var data_work = JSON.parse(JSON.stringify(json_work));
      return data_work;
    break;
    case "play":
      var json_play = {"title": "Play","timeframes": {"daily": {"current": 1,"previous": 2},"weekly": {"current": 10,"previous": 8},"monthly": {"current": 23,"previous": 29}}};
      var data_play = JSON.parse(JSON.stringify(json_play));
      return data_play;
    break;
    case "study":
      var json_study = {"title": "Study","timeframes": {"daily": {"current": 0,"previous": 1},"weekly": {"current": 4,"previous": 7},"monthly": {"current": 13,"previous": 19}}};
      var data_study = JSON.parse(JSON.stringify(json_study));
      return data_study;
    break;
    case "exercise":
      var json_exercise = {"title": "Exercise","timeframes": {"daily": {"current": 1,"previous": 1},"weekly": {"current": 4,"previous": 5},"monthly": {"current": 11,"previous": 18}}};
      var data_exercise = JSON.parse(JSON.stringify(json_exercise));
      return data_exercise;
    break;
    case "social":
      var json_social = {"title": "Social","timeframes": {"daily": {"current": 1,"previous": 3},"weekly": {"current": 5,"previous": 10},"monthly": {"current": 21,"previous": 23}}};
      var data_social = JSON.parse(JSON.stringify(json_social));
      return data_social;
    break;
    case "selfcare":
      var json_selfcare = {"title": "Self Care","timeframes": {"daily": {"current": 0,"previous": 1},"weekly": {"current": 2,"previous": 2},"monthly": {"current": 7,"previous": 11}}};
      var data_selfcare = JSON.parse(JSON.stringify(json_selfcare));
      return data_selfcare;
    break;
  }
}

function getTypeData(type, option) {
  var text = ( option == "daily" ? "Yesterday" : ( option == "weekly" ? "Last Week" : "Last Month" ) );
  var data = getObject(type);

  $('#card_'+type+' .title_name').text(data.title);
  $('#card_'+type+' .hour').text(data.timeframes[option].current + 'hrs');
  $('#card_'+type+' .last_hour').text(text + ' - ' + data.timeframes[option].previous + 'hrs');
}

function getData(option) {
  getTypeData('work', option);
  getTypeData('play', option);
  getTypeData('study', option);
  getTypeData('exercise', option);
  getTypeData('social', option);
  getTypeData('selfcare', option);
}

$(document).ready( function() {
  getData('daily');

  $('#daily').on('click', function() {
    getData('daily');

    $('#weekly').removeClass('active');
    $('#monthly').removeClass('active');
    $('#daily').addClass('active');
  });
  $('#weekly').on('click', function() {
    getData('weekly');

    $('#daily').removeClass('active');
    $('#monthly').removeClass('active');
    $('#weekly').addClass('active');
  });
  $('#monthly').on('click', function() {
    getData('monthly');

    $('#daily').removeClass('active');
    $('#weekly').removeClass('active');
    $('#monthly').addClass('active');
  });
});
