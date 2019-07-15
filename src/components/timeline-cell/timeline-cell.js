// components/timeline-cell/timeline-cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 时间点列表，至少要传两个值
    times: Array,
    // 当前时间线的状态，'unstart' 未开始
    status: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    lineClass: '',
  },

  /**
   * 组件数据监听
   */
  observers:  {
    'status': function(status) {
      let lineClass = '';
      switch(status) {
        case 'underway':
          lineClass = 'm-timeline-item_line--underway';
          break;
        case 'past':
          lineClass = 'm-timeline-item_line--past';
          break;
        default:
          break;
      }
      this.setData({
        lineClass,
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
