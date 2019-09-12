  var baseUrl = "http://39.98.179.212:8686/pig-joggle";
  var essayList = baseUrl + "/qs/getQsArticleList"; //文章列表
  var essayDetails = baseUrl + "/qs/getQsArticle"; //文章详细信息
  var commonList = baseUrl + "/qs/qsArticleEvaluateList"; //获取评论列表
  var essayPraise = baseUrl + "/qs/praiseQsArticle"; //文章点赞
  var praiseNum = baseUrl + "/qs/praiseQsArticleEvaluate"; //点赞数量
  export default {
      // 文章列表
      essayList,
      //文章详细信息
      essayDetails,
      //获取评论列表
      commonList,
      //文章点赞
      essayPraise,
      //点赞数量
      praiseNum
  }