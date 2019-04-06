Page({
  data: {
    head: ['公司代码'],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    duration: 500,


    current_change: false,
    current_x: 0,
    current_y: 0,
    moveend: '',
    startpoint: [0, 0],
    democlass: ['demo1-text1', 'demo1-text2', 'demo1-text3'],
    titleclass: ['title1-text1', 'title1-text2', 'title1-text3', 'title1-text4', 'title1-text5'],
    headtext: [{
      head1class: ['公司代码']
    }, {
      head2class: ['维护公司代码的全局性参数']
    }, {
      head3class: ['???']
    }, ],

    demo_text_x: [{
        demo1class: ['demo1-text1', 'demo1-text2', 'demo1-text3']
      },
      {
        demo2class: ['demo2-text1', 'demo2-text2', 'demo2-text3']
      },
      {
        demo3class: []
      },
    ],

    title_text: [{
        title1class: ['title1-text1', 'title1-text2', 'title1-text3', 'title1-text4', 'title1-text5']
      },
      {
        title2class: ['title2-text1', 'title2-text2', 'title2-text3',
          'title2-text4', 'title2-text5','title2-text6',
          'title2-text7', 'title2-text8', 'title2-text9',
          'title2-text10','title2-text11', 'title2-text12',
        ]
      },
      {
        title3class: []
      },
    ]

  },

  move_start: function(e) {
    this.setData({
      startpoint: [e.touches[0].pageX, e.touches[0].pageY]
    });
  },

  touch_move: function(e) {
    var curpoint = [e.touches[0].pageX, e.touches[0].pageY];
    var startpoint = this.data.startpoint;

    if (curpoint[0] <= startpoint[0]) {
      if (Math.abs(curpoint[0] - startpoint[0]) >= Math.abs(curpoint[1] - startpoint[1])) {
        this.setData({
          moveend: 'left'

        })
      } else {
        if (curpoint[1] >= startpoint[1]) {
          this.setData({
            moveend: 'down'
          })
        } else {
          this.setData({
            moveend: 'up'
          })
        }
      }
    } else {
      if (Math.abs(curpoint[0] - startpoint[0]) >= Math.abs(curpoint[1] - startpoint[1])) {
        this.setData({
          moveend: 'right'
        })
      } else {
        if (curpoint[1] >= startpoint[1]) {
          this.setData({
            moveend: 'down'
          })
        } else {
          this.setData({
            moveend: 'up'
          })
        }
      }
    }
    if (this.data.moveend == 'left' || this.data.moveend == 'right') {
      this.setData({
        democlass: [],
      })
    }
  },

  move_end: function(e) {
    if (this.data.current_change == false) {
      switch (this.data.current_x) {
        case 0:
          this.setData({
            democlass: this.data.demo_text_x[0].demo1class,
          })
          break;
        case 1:
          this.setData({
            democlass: this.data.demo_text_x[1].demo2class,
          })
          break;
        default:
          console.log('default')
          break;
      }
    }
  },

  current_change: function(e) {
    this.setData({
      current_change: true
    })

    var moveend = this.data.moveend;
    var current_x = this.data.current_x;
    var current_y = this.data.current_y;
    var current_change = this.data.current_change;

    switch (moveend) {
      case 'left':
        if (current_x < 3 && current_change == true) {
          current_x += 1
        };
        break;
      case 'right':
        if (current_x >= 0 && current_change == true) {
          current_x -= 1
        };
        break;
      default:
        console.log('default')
        break;
    }
    this.setData({
      current_x: current_x
    })

    switch (this.data.current_x) {
      case 0:
        if (current_change = true) {
          this.setData({
            democlass: this.data.demo_text_x[0].demo1class,
            current_change: false,
            titleclass: this.data.title_text[0].title1class,
            head: this.data.headtext[0].head1class
          }, )
        }
        break;
      case 1:
        if (current_change = true) {
          this.setData({
            democlass: this.data.demo_text_x[1].demo2class,
            current_change: false,
            titleclass: this.data.title_text[1].title2class,
            head: this.data.headtext[1].head2class
          })
        }
        break;
      case 2:
        if (current_change = true) {
          this.setData({
            democlass: this.data.demo_text_x[2].demo3class,
            current_change: false,
            titleclass: this.data.title_text[2].title3class,
            head: this.data.headtext[2].head3class
          })
        }
        break;
      default:
        console.log('default')
        break;
    }
  },
})