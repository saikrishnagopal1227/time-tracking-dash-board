const data = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

const buttons = document.querySelectorAll('.button');
const current = document.querySelectorAll('.current');
const previous = document.querySelectorAll('.previous');
const duration = document.querySelectorAll('.duration');
buttons.forEach(button => {
    console.log('hello')
    button.addEventListener('click', handleclick)
})

function handleclick(event) {
    buttons.forEach(val => {
        val.classList.remove('active')
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active')
            var x = val.innerHTML;

            x = x.toLowerCase()
            console.log(x)
            for (let i in data) {
                previous[i].innerHTML = data[i].timeframes[x].previous + 'hrs'
                current[i].innerHTML = data[i].timeframes[x].current + 'hrs'
                if (x == 'daily') {
                    duration[i].innerHTML = 'Day'
                } else if (x == 'weekly') {
                    duration[i].innerHTML = 'Week'
                } else if (x == 'monthly') {
                    duration[i].innerHTML = 'Month'
                }
            }
        }

    })
}