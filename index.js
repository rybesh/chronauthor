/*global $ */

var agents =
    [ [ 'alexander berkman' , 'Alexander Berkman' ]
    , [ 'anthony comstock' , 'Anthony Comstock' ]
    , [ 'ben reitman' , 'Ben Reitman' ]
    , [ 'br' , 'Ben Reitman' ]
    , [ 'emma goldman' , 'Emma Goldman' ]
    , [ 'eg' , 'Emma Goldman' ]
    , [ 'leobard dalton abbott' , 'Leonard Dalton Abbott' ]
    , [ 'margaret sanger' , 'Margaret Sanger' ]
    , [ 'ms' , 'Margaret Sanger' ]
    , [ 'robert minor' , 'Robert Minor' ]
    ]

var places =
    [ [ 'new york'                         , 'New York' ]
    , [ 'new york city'                    , '&nbsp;&nbsp;New York City' ]
    , [ 'harlem masonic temple'            , '&nbsp;&nbsp;&nbsp;&nbsp;Harlem Masonic Temple' ]
    , [ 'pennsylvania'                     , 'Pennsylvania' ]
    , [ 'philadelphia'                     , '&nbsp;&nbsp;Philadelphia' ]
    , [ 'north broad street drawing rooms' , '&nbsp;&nbsp;&nbsp;&nbsp;North Broad Street Drawing Rooms' ]
    , [ 'pittsburgh'                       , '&nbsp;&nbsp;Pittsburgh' ]
    , [ 'conservatory of music'            , '&nbsp;&nbsp;&nbsp;&nbsp;Conservatory of Music' ]
    , [ 'washington dc'                    , 'Washington, D.C.' ]
    , [ 'arcade hall'                      , '&nbsp;&nbsp;Arcade Hall' ]
    ]

$('textarea').textcomplete(
  [ // agent strategy
    { match : /\B:([\w\s]*)$/
    , search : function (input, callback) {
        callback($.map(agents, function (tuple) {
                   return tuple[0].indexOf(input) === 0 ? tuple[1] : null
                 }))
      }
    , replace : function (agent) {
        return ':' + agent + ' '
      }
    , index: 1
    , maxCount: 10
    }
  , // place strategy
    { match : /\B@([\w\s]*)$/
    , search : function (input, callback) {
        callback($.map(places, function (tuple) {
                   return tuple[0].indexOf(input) === 0 ? tuple[1] : null
                 }))
      }
    , replace : function (place) {
        return '@' + place.replace(/^(&nbsp;)+/, '') + ' '
      }
    , index: 1
    , maxCount: 10
    }
  ]
).overlay(
  [ { match: $.map(agents, function (tuple) {
               return ':' + tuple[1]
             })
    , css: { 'background-color' : '#d4e6ff' }
    }
  ,
    { match: $.map(places, function (tuple) {
               return '@' + tuple[1].replace(/^(&nbsp;)+/, '')
             })
    , css: { 'background-color' : '#d7ffd4' }
    }
  ]
)

var data = $('textarea').val()
$('textarea').val('').focus().val(data)
