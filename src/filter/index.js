        // 过滤时间
        function filterTime(time) {
            var pastTime = Date.parse(time)
            var nowDate = (new Date()).getTime();
            var date = nowDate - pastTime;
            date = parseInt(date / 1000);


            var min = parseInt(date % 86400 % 3600 / 60) >= 10 ? parseInt(date % 86400 % 3600 / 60) : "0" + parseInt(date % 86400 % 3600 / 60);

            if (min >= 0 && min <= 2) {
                return "刚刚"
            } else {
                return min + "分钟前"
            }

        }

        export default {
            filterTime
        }