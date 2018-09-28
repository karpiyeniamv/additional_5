module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var count = 0;
    if (str.length%2==1)
        return false;
    for (i = 0; i < str.length; i++) {
        var j = 0;
        if (str[i] == '|')
        {

            if (count==0)
            {
                count++;
                stack.push(str[i]);
            }
            else
            if (count==1)
            {
                if  (stack.pop() != '|')
                    return false;
                else
                    count--;
            }
        }
        else {

            for (j; j < bracketsConfig.length; j++) {
                if (str[i] == bracketsConfig[j][0]) {
                    stack.push(str[i]);
                }
                else if (str[i] == bracketsConfig[j][1]) {
                    if (stack.pop() != bracketsConfig[j][0]) {
                        return false;
                    }
                }
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
};
