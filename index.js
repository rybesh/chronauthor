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
    ]

$('textarea').textcomplete(
  [ { match : /\B:([\w\s]*)$/
    , search : function (input, callback) {
        callback($.map(agents, function (tuple) {
                   return tuple[0].indexOf(input) === 0 ? tuple[1] : null
                 }))
      }
    , replace : function (agent) {
        return agent + ' '
      }
    , index: 1
    , maxCount: 10
    }
  ]
)
