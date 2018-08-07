export default {
   "version": "1.4.2",
   "countries": {
      "AC": {
         "phone_code": "247",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[01589]\\d|[46])\\d{4}",
         "types": {
            "uan": {
               "pattern": "[01589]\\d{5}",
               "possible_lengths": [
                  6
               ]
            },
            "fixed_line": {
               "pattern": "6[2-467]\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "4\\d{4}",
               "possible_lengths": [
                  5
               ]
            }
         },
         "examples": {
            "uan": "542011",
            "fixed_line": "62889",
            "mobile": "40123"
         },
         "formats": [],
         "possible_lengths": [
            5,
            6
         ]
      },
      "AD": {
         "phone_code": "376",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1|6\\d)\\d{7}|[136-9]\\d{5}",
         "types": {
            "premium_rate": {
               "pattern": "[19]\\d{5}",
               "possible_lengths": [
                  6
               ]
            },
            "toll_free": {
               "pattern": "180[02]\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "[78]\\d{5}",
               "possible_lengths": [
                  6
               ]
            },
            "mobile": {
               "pattern": "(?:3\\d|6(?:[0-8]|9(?:0\\d{2})?))\\d{4}",
               "possible_lengths": [
                  6,
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "912345",
            "toll_free": "18001234",
            "fixed_line": "712345",
            "mobile": "312345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[136-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "180",
                  "180[02]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "690"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            8,
            9
         ]
      },
      "AE": {
         "phone_code": "971",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900[02]\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "400\\d{6}|800\\d{2,9}"
            },
            "shared_cost": {
               "pattern": "700[05]\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "600[25]\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "[2-4679][2-8]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "5[024-68]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900234567",
            "toll_free": "800123456",
            "shared_cost": "700012345",
            "uan": "600212345",
            "fixed_line": "22345678",
            "mobile": "501234567"
         },
         "formats": [
            {
               "pattern": "([2-4679])(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-4679][2-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(5\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "5"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([479]00)(\\d)(\\d{5})",
               "leading_digits_patterns": [
                  "[479]00"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([68]00)(\\d{2,9})",
               "leading_digits_patterns": [
                  "[68]00"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "AF": {
         "phone_code": "93",
         "idd_prefix": "00",
         "national_number_pattern": "[2-7]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}"
            },
            "mobile": {
               "pattern": "7(?:[014-9]\\d|2[89]|3[01])\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "234567890",
            "mobile": "701234567"
         },
         "formats": [
            {
               "pattern": "([2-7]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-7]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "AG": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "268",
         "national_number_pattern": "(?:268|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "voip": {
               "pattern": "26848[01]\\d{4}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "pager": {
               "pattern": "26840[69]\\d{4}"
            },
            "fixed_line": {
               "pattern": "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}"
            },
            "mobile": {
               "pattern": "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "voip": "2684801234",
            "personal_number": "5002345678",
            "pager": "2684061234",
            "fixed_line": "2684601234",
            "mobile": "2684641234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "AI": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "264",
         "national_number_pattern": "(?:264|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "2644(?:6[12]|9[78])\\d{4}"
            },
            "mobile": {
               "pattern": "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "2644612345",
            "mobile": "2642351234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "AL": {
         "phone_code": "355",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900[1-9]\\d{2}",
               "possible_lengths": [
                  6
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "shared_cost": {
               "pattern": "808[1-9]\\d{2}",
               "possible_lengths": [
                  6
               ]
            },
            "personal_number": {
               "pattern": "700[2-9]\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]\\d|6\\d{2}))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "6(?:[689][2-9]|7[2-6])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900123",
            "toll_free": "8001234",
            "shared_cost": "808123",
            "personal_number": "70021234",
            "fixed_line": "22345678",
            "mobile": "662123456"
         },
         "formats": [
            {
               "pattern": "(4)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "4[0-6]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(6\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2358][2-5]|4[7-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3,5})",
               "leading_digits_patterns": [
                  "[235][16-9]|[79]|8[016-9]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "AM": {
         "phone_code": "374",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[1-489]\\d|55|60|77)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "premium_rate": {
               "pattern": "90[016]\\d{5}"
            },
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "shared_cost": {
               "pattern": "80[1-4]\\d{5}"
            },
            "voip": {
               "pattern": "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}"
            },
            "mobile": {
               "pattern": "(?:4[1349]|55|77|88|9[13-9])\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "shared_cost": "80112345",
            "voip": "60271234",
            "fixed_line": "10123456",
            "mobile": "77123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "1|47"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "4[1349]|[5-7]|88|9[1-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "[23]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "8|90"
               ],
               "national_prefix_formatting_rule": "0 $1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "AO": {
         "phone_code": "244",
         "idd_prefix": "00",
         "national_number_pattern": "[29]\\d{8}",
         "types": {
            "fixed_line": {
               "pattern": "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}"
            },
            "mobile": {
               "pattern": "9[1-49]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "222123456",
            "mobile": "923123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "AR": {
         "phone_code": "54",
         "idd_prefix": "00",
         "national_number_pattern": "(?:11|(?:[2368]|9\\d)\\d)\\d{8}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?",
         "national_prefix_transform_rule": "9$1",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "60[04579]\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "810\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:[07]\\d|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|6[013-9])|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[012789]\\d|3[1-6]|4[02-9]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:0[0124-9]|[1-357]\\d|4[24-7]|6[02-9]|8[0-79]|9[1236-8])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[069]\\d|1[1568]|2[013-9]|3[145]|4[0-35-9]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[01578]\\d|2[15-7]|3[0-24-9]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})"
            }
         },
         "examples": {
            "premium_rate": "6001234567",
            "toll_free": "8001234567",
            "uan": "8101234567",
            "fixed_line": "1123456789",
            "mobile": "91123456789"
         },
         "formats": [
            {
               "pattern": "([68]\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[68]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(9)(11)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "911"
               ],
               "format": "$2 15-$3-$4",
               "international_format": "$1 $2 $3-$4"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "9(?:2[2-4689]|3[3-8])",
                  "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))",
                  "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
                  "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"
               ],
               "format": "$2 15-$3-$4",
               "international_format": "$1 $2 $3-$4"
            },
            {
               "pattern": "(9)(\\d{4})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "9[23]"
               ],
               "format": "$2 15-$3-$4",
               "international_format": "$1 $2 $3-$4"
            },
            {
               "pattern": "(11)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "11"
               ],
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2-$3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])",
                  "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
                  "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"
               ],
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2-$3"
            },
            {
               "pattern": "(\\d{4})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[23]"
               ],
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2-$3"
            }
         ],
         "possible_lengths": [
            10,
            11
         ]
      },
      "AS": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "684",
         "national_number_pattern": "(?:[58]\\d\\d|684|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "6846(?:22|33|44|55|77|88|9[19])\\d{4}"
            },
            "mobile": {
               "pattern": "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "6846221234",
            "mobile": "6847331234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "AT": {
         "phone_code": "43",
         "idd_prefix": "00",
         "national_number_pattern": "[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:[05]\\d{3,10}|[2-467]\\d{3,4}|8\\d{3,6}|9\\d{3,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{5,6}|[15]\\d{4}|1\\d{3}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "9(?:0[01]|3[019])\\d{6,10}",
               "possible_lengths": [
                  9,
                  10,
                  11,
                  12,
                  13
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6,10}",
               "possible_lengths": [
                  9,
                  10,
                  11,
                  12,
                  13
               ]
            },
            "shared_cost": {
               "pattern": "8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}",
               "possible_lengths": [
                  8,
                  9,
                  10,
                  11,
                  12,
                  13
               ]
            },
            "voip": {
               "pattern": "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|7[28]0\\d{6,10}",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13
               ]
            },
            "fixed_line": {
               "pattern": "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}"
            },
            "mobile": {
               "pattern": "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13
               ]
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "810123456",
            "voip": "780123456",
            "fixed_line": "1234567890",
            "mobile": "664123456"
         },
         "formats": [
            {
               "pattern": "(116\\d{3})",
               "leading_digits_patterns": [
                  "116"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1"
            },
            {
               "pattern": "(1)(\\d{3,12})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(5\\d)(\\d{3,5})",
               "leading_digits_patterns": [
                  "5[079]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(5\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "5[079]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(5\\d)(\\d{4})(\\d{4,7})",
               "leading_digits_patterns": [
                  "5[079]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3,10})",
               "leading_digits_patterns": [
                  "(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "517"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{3,9})",
               "leading_digits_patterns": [
                  "2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13
         ]
      },
      "AU": {
         "phone_code": "61",
         "idd_prefix": "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011)|001[14-689]",
         "default_idd_prefix": "0011",
         "national_number_pattern": "1\\d{4,9}|[2-578]\\d{8}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "19(?:0[0126]\\d|[679])\\d{5}",
               "possible_lengths": [
                  8,
                  10
               ]
            },
            "toll_free": {
               "pattern": "180(?:0\\d{3}|2)\\d{3}",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "shared_cost": {
               "pattern": "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",
               "possible_lengths": [
                  6,
                  8,
                  10
               ]
            },
            "voip": {
               "pattern": "550\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "personal_number": {
               "pattern": "500\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "16\\d{3,7}",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  9
               ]
            },
            "fixed_line": {
               "pattern": "[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "shared_cost": "1300123456",
            "voip": "550123456",
            "personal_number": "500123456",
            "pager": "1612345",
            "fixed_line": "212345678",
            "mobile": "412345678"
         },
         "formats": [
            {
               "pattern": "([2378])(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2378]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "14|[45]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(16)(\\d{3,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(16)(\\d{3})(\\d{2,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[389]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[389]0",
                  "1(?:[38]0|9)0"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(180)(2\\d{3})",
               "leading_digits_patterns": [
                  "180",
                  "1802"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d)(\\d{3})",
               "leading_digits_patterns": [
                  "19[13]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "19[679]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(13)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "13[1-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10
         ]
      },
      "AW": {
         "phone_code": "297",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[25-79]\\d\\d|800)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{4}"
            },
            "toll_free": {
               "pattern": "800\\d{4}"
            },
            "voip": {
               "pattern": "28\\d{5}|501\\d{4}"
            },
            "fixed_line": {
               "pattern": "5(?:2\\d|8[1-9])\\d{4}"
            },
            "mobile": {
               "pattern": "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9001234",
            "toll_free": "8001234",
            "voip": "5011234",
            "fixed_line": "5212345",
            "mobile": "5601234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "AX": {
         "phone_code": "358",
         "idd_prefix": "00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))",
         "default_idd_prefix": "00",
         "national_number_pattern": "1\\d{5,11}|(?:[27]|4\\d)\\d{4,9}|[356]0\\d{6,8}|800\\d{4,7}|[35]0\\d{4,5}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "[67]00\\d{5,6}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4,7}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            },
            "uan": {
               "pattern": "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "18[1-8]\\d{3,9}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
               ]
            },
            "mobile": {
               "pattern": "4\\d{5,10}|50\\d{4,8}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "600123456",
            "toll_free": "8001234567",
            "uan": "10112345",
            "fixed_line": "181234567",
            "mobile": "412345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3,7})",
               "leading_digits_patterns": [
                  "(?:[1-3]0|[6-8])0"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(75\\d{3})",
               "leading_digits_patterns": [
                  "75[12]"
               ],
               "format": "$1"
            },
            {
               "pattern": "(116\\d{3})",
               "leading_digits_patterns": [
                  "116"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1"
            },
            {
               "pattern": "(\\d{2})(\\d{4,10})",
               "leading_digits_patterns": [
                  "[14]|2[09]|50|7[135]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d)(\\d{4,11})",
               "leading_digits_patterns": [
                  "[25689][1-8]|3"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "AZ": {
         "phone_code": "994",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "premium_rate": {
               "pattern": "900200\\d{3}"
            },
            "toll_free": {
               "pattern": "88\\d{7}"
            },
            "fixed_line": {
               "pattern": "(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}"
            },
            "mobile": {
               "pattern": "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "900200123",
            "toll_free": "881234567",
            "fixed_line": "123123456",
            "mobile": "401234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "1[28]|2(?:[0-36]|[45]2)|365"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[4-8]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "9"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "BA": {
         "phone_code": "387",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "9[0246]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "8[08]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "8[12]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "70(?:3[0146]|[56]0)\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:3(?:[05679][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "shared_cost": "82123456",
            "uan": "70341234",
            "fixed_line": "30212345",
            "mobile": "61123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[3-5]"
               ],
               "format": "$1 $2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "6[1-356]|[7-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "6[047]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "BB": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "246",
         "national_number_pattern": "(?:246|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}|246976\\d{4}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "voip": {
               "pattern": "24631\\d{5}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "uan": {
               "pattern": "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|736)\\d{4}"
            },
            "fixed_line": {
               "pattern": "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}"
            },
            "mobile": {
               "pattern": "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "voip": "2463101234",
            "personal_number": "5002345678",
            "uan": "2464301234",
            "fixed_line": "2464123456",
            "mobile": "2462501234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "BD": {
         "phone_code": "880",
         "idd_prefix": "00",
         "national_number_pattern": "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "80[03]\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "96(?:0[469]|1[0-4]|3[389]|6[69]|7[78])\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-9]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "8001234567",
            "voip": "9604123456",
            "fixed_line": "27111234",
            "mobile": "1812345678"
         },
         "formats": [
            {
               "pattern": "(2)(\\d{7,8})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{2})(\\d{4,6})",
               "leading_digits_patterns": [
                  "[3-79]1"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{4})(\\d{3,6})",
               "leading_digits_patterns": [
                  "1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[01367])"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{3})(\\d{3,7})",
               "leading_digits_patterns": [
                  "[3-79][2-9]|8"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10
         ]
      },
      "BE": {
         "phone_code": "32",
         "idd_prefix": "00",
         "national_number_pattern": "4\\d{8}|[1-9]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800[1-9]\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "78[0-7]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "4(?:56|6[0135-8]|[79]\\d|8[3-9])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "uan": "78102345",
            "fixed_line": "12345678",
            "mobile": "470123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "4[5-9]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[23]|4[23]|9[2-4]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[156]|7[018]|8(?:0[1-9]|[1-79])"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "(?:80|9)0"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "BF": {
         "phone_code": "226",
         "idd_prefix": "00",
         "national_number_pattern": "[25-7]\\d{7}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}"
            },
            "mobile": {
               "pattern": "(?:5[124-8]|[67]\\d)\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "20491234",
            "mobile": "70123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "BG": {
         "phone_code": "359",
         "idd_prefix": "00",
         "national_number_pattern": "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "700\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}",
               "possible_lengths": [
                  6,
                  7,
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}|4(?:3[0789]|8\\d)\\d{5}",
               "possible_lengths": [
                  8,
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80012345",
            "personal_number": "70012345",
            "fixed_line": "2123456",
            "mobile": "48123456"
         },
         "formats": [
            {
               "pattern": "(2)(\\d)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(2)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "43[124-7]|70[1-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "43[124-7]|70[1-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[78]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "99[69]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2,3})",
               "leading_digits_patterns": [
                  "[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "48|8[7-9]|9[08]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "BH": {
         "phone_code": "973",
         "idd_prefix": "00",
         "national_number_pattern": "[136-9]\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "(?:87|9[014578])\\d{6}"
            },
            "toll_free": {
               "pattern": "80\\d{6}"
            },
            "shared_cost": {
               "pattern": "84\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}"
            },
            "mobile": {
               "pattern": "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "shared_cost": "84123456",
            "fixed_line": "17001234",
            "mobile": "36001234"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "BI": {
         "phone_code": "257",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[267]\\d|31)\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "22\\d{6}"
            },
            "mobile": {
               "pattern": "(?:29|31|6[189]|7[125-9])\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "22201234",
            "mobile": "79561234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "BJ": {
         "phone_code": "229",
         "idd_prefix": "00",
         "national_number_pattern": "[2689]\\d{7}",
         "types": {
            "voip": {
               "pattern": "857[58]\\d{4}"
            },
            "uan": {
               "pattern": "81\\d{6}"
            },
            "fixed_line": {
               "pattern": "2(?:02|1[037]|2[45]|3[68])\\d{5}"
            },
            "mobile": {
               "pattern": "(?:6\\d|9[03-9])\\d{6}"
            }
         },
         "examples": {
            "voip": "85751234",
            "uan": "81123456",
            "fixed_line": "20211234",
            "mobile": "90011234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2689]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "BL": {
         "phone_code": "590",
         "idd_prefix": "00",
         "national_number_pattern": "(?:590|69\\d)\\d{6}",
         "national_prefix": "0",
         "types": {
            "fixed_line": {
               "pattern": "590(?:2[7-9]|5[12]|87)\\d{4}"
            },
            "mobile": {
               "pattern": "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "590271234",
            "mobile": "690001234"
         },
         "formats": [
            {
               "pattern": "([56]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "590|69[01]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "BM": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "441",
         "national_number_pattern": "(?:441|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}"
            },
            "mobile": {
               "pattern": "441(?:[37]\\d|5[0-39])\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "4412345678",
            "mobile": "4413701234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "BN": {
         "phone_code": "673",
         "idd_prefix": "00",
         "national_number_pattern": "[2-578]\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}"
            },
            "mobile": {
               "pattern": "22[89]\\d{4}|[78]\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "2345678",
            "mobile": "7123456"
         },
         "formats": [
            {
               "pattern": "([2-578]\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-578]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "BO": {
         "phone_code": "591",
         "idd_prefix": "00(1\\d)?",
         "national_number_pattern": "(?:[2-467]\\d{3}|80017)\\d{4}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0(1\\d)?",
         "types": {
            "toll_free": {
               "pattern": "80017\\d{4}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "[67]\\d{7}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "toll_free": "800171234",
            "fixed_line": "22123456",
            "mobile": "71234567"
         },
         "formats": [
            {
               "pattern": "([234])(\\d{7})",
               "leading_digits_patterns": [
                  "[2-4]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([67]\\d{7})",
               "leading_digits_patterns": [
                  "[67]"
               ],
               "format": "$1"
            },
            {
               "pattern": "(800)(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "BQ": {
         "phone_code": "599",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[34]1|7\\d)\\d{5}",
         "types": {
            "fixed_line": {
               "pattern": "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}"
            },
            "mobile": {
               "pattern": "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"
            }
         },
         "examples": {
            "fixed_line": "7151234",
            "mobile": "3181234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[13-7]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "BR": {
         "phone_code": "55",
         "idd_prefix": "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
         "national_number_pattern": "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
         "national_prefix_transform_rule": "$2",
         "types": {
            "premium_rate": {
               "pattern": "(?:300|[59]00\\d?)\\d{6}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6,7}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "shared_cost": {
               "pattern": "(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",
               "possible_lengths": [
                  8,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",
               "possible_lengths": [
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "300123456",
            "toll_free": "800123456",
            "shared_cost": "40041234",
            "fixed_line": "1123456789",
            "mobile": "11961234567"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "300|4(?:0[02]|37)",
                  "300|4(?:0(?:0|20)|370)"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "([3589]00)(\\d{2,3})(\\d{4})",
               "leading_digits_patterns": [
                  "[3589]00"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-9][1-9]"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{5})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-9][1-9]9"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2-$3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10,
            11
         ]
      },
      "BS": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "242",
         "national_number_pattern": "(?:242|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "uan": {
               "pattern": "242225[0-46-9]\\d{3}"
            },
            "fixed_line": {
               "pattern": "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}"
            },
            "mobile": {
               "pattern": "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "uan": "2422250123",
            "fixed_line": "2423456789",
            "mobile": "2423591234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "BT": {
         "phone_code": "975",
         "idd_prefix": "00",
         "national_number_pattern": "[17]\\d{7}|[2-8]\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:1[67]|77)\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "fixed_line": "2345678",
            "mobile": "17123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "1|77"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([2-8])(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2-68]|7[246]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "BW": {
         "phone_code": "267",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[2-6]|7\\d)\\d|90)\\d{5}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "voip": {
               "pattern": "79[12][01]\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "7(?:[1-6]\\d|7[014-8])\\d{5}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9012345",
            "voip": "79101234",
            "fixed_line": "2401234",
            "mobile": "71123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-6]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(7\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(90)(\\d{5})",
               "leading_digits_patterns": [
                  "90"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "BY": {
         "phone_code": "375",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
         "national_prefix": "8",
         "national_prefix_for_parsing": "8?0?",
         "types": {
            "premium_rate": {
               "pattern": "(?:810|902)\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}"
            },
            "voip": {
               "pattern": "249\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "9021234567",
            "toll_free": "8011234567",
            "voip": "249123456",
            "fixed_line": "152450911",
            "mobile": "294911911"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "17[0-3589]|2[4-9]|[34]",
                  "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"
               ],
               "national_prefix_formatting_rule": "8 0$1",
               "format": "$1 $2-$3-$4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
                  "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"
               ],
               "national_prefix_formatting_rule": "8 0$1",
               "format": "$1 $2-$3-$4"
            },
            {
               "pattern": "(\\d{4})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                  "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"
               ],
               "national_prefix_formatting_rule": "8 0$1",
               "format": "$1 $2-$3"
            },
            {
               "pattern": "([89]\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8[01]|9"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(82\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "82"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{3})",
               "leading_digits_patterns": [
                  "800"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{2})(\\d{2,4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10,
            11
         ]
      },
      "BZ": {
         "phone_code": "501",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0800\\d|[2-8])\\d{6}",
         "types": {
            "toll_free": {
               "pattern": "0800\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "6[0-35-7]\\d{5}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "toll_free": "08001234123",
            "fixed_line": "2221234",
            "mobile": "6221234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-8]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(0)(800)(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "080",
                  "0800"
               ],
               "format": "$1-$2-$3-$4"
            }
         ],
         "possible_lengths": [
            7,
            11
         ]
      },
      "CA": {
         "phone_code": "1",
         "idd_prefix": "011",
         "national_number_pattern": "(?:[2-8]\\d|90)\\d{8}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "voip": {
               "pattern": "600[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "voip": "6002012345",
            "personal_number": "5002345678",
            "fixed_line": "5062345678",
            "mobile": "2042345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "CC": {
         "phone_code": "61",
         "idd_prefix": "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]",
         "default_idd_prefix": "0011",
         "national_number_pattern": "1\\d{5,9}|[458]\\d{8}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "19(?:0[0126]\\d|[679])\\d{5}",
               "possible_lengths": [
                  8,
                  10
               ]
            },
            "toll_free": {
               "pattern": "180(?:0\\d{3}|2)\\d{3}",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "shared_cost": {
               "pattern": "13(?:00\\d{2})?\\d{4}",
               "possible_lengths": [
                  6,
                  10
               ]
            },
            "voip": {
               "pattern": "550\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "personal_number": {
               "pattern": "500\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "shared_cost": "1300123456",
            "voip": "550123456",
            "personal_number": "500123456",
            "fixed_line": "891621234",
            "mobile": "412345678"
         },
         "formats": [
            {
               "pattern": "([2378])(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2378]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "14|[45]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(16)(\\d{3,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(16)(\\d{3})(\\d{2,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[389]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[389]0",
                  "1(?:[38]0|9)0"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(180)(2\\d{3})",
               "leading_digits_patterns": [
                  "180",
                  "1802"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d)(\\d{3})",
               "leading_digits_patterns": [
                  "19[13]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "19[679]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(13)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "13[1-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10
         ]
      },
      "CD": {
         "phone_code": "243",
         "idd_prefix": "00",
         "national_number_pattern": "[189]\\d{8}|[1-68]\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}"
            },
            "mobile": {
               "pattern": "8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "1234567",
            "mobile": "991234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "12"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([89]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "8[0-2459]|9"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "88"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "[1-6]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            9
         ]
      },
      "CF": {
         "phone_code": "236",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[27]\\d{3}|8776)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "8776\\d{4}"
            },
            "fixed_line": {
               "pattern": "2[12]\\d{6}"
            },
            "mobile": {
               "pattern": "7[0257]\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "87761234",
            "fixed_line": "21612345",
            "mobile": "70012345"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "CG": {
         "phone_code": "242",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:0\\d|80)\\d|222)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "80(?:0\\d{2}|11[0-4])\\d{4}"
            },
            "fixed_line": {
               "pattern": "222[1-589]\\d{5}"
            },
            "mobile": {
               "pattern": "0[14-6]\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "800123456",
            "fixed_line": "222123456",
            "mobile": "061234567"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "801"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[02]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "CH": {
         "phone_code": "41",
         "idd_prefix": "00",
         "national_number_pattern": "8\\d{11}|[2-9]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90[016]\\d{6}"
            },
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "shared_cost": {
               "pattern": "84[0248]\\d{6}"
            },
            "personal_number": {
               "pattern": "878\\d{6}"
            },
            "pager": {
               "pattern": "74[0248]\\d{6}"
            },
            "uan": {
               "pattern": "5[18]\\d{7}"
            },
            "fixed_line": {
               "pattern": "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}"
            },
            "mobile": {
               "pattern": "7[5-9]\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "840123456",
            "personal_number": "878123456",
            "pager": "740123456",
            "uan": "581234567",
            "fixed_line": "212345678",
            "mobile": "781234567"
         },
         "formats": [
            {
               "pattern": "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2-7]|[89]1"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([89]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "8[047]|90"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "860"
               ],
               "format": "$1 $2 $3 $4 $5"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "CI": {
         "phone_code": "225",
         "idd_prefix": "00",
         "national_number_pattern": "[02-8]\\d{7}",
         "types": {
            "fixed_line": {
               "pattern": "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}"
            },
            "mobile": {
               "pattern": "(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "21234567",
            "mobile": "01234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "CK": {
         "phone_code": "682",
         "idd_prefix": "00",
         "national_number_pattern": "[2-8]\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "(?:2\\d|3[13-7]|4[1-5])\\d{3}"
            },
            "mobile": {
               "pattern": "[5-8]\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "21234",
            "mobile": "71234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5
         ]
      },
      "CL": {
         "phone_code": "56",
         "idd_prefix": "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0",
         "national_number_pattern": "(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}",
         "types": {
            "toll_free": {
               "pattern": "800\\d{6}|1230\\d{7}",
               "possible_lengths": [
                  9,
                  11
               ]
            },
            "shared_cost": {
               "pattern": "600\\d{7,8}",
               "possible_lengths": [
                  10,
                  11
               ]
            },
            "voip": {
               "pattern": "44\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "2(?:1962\\d{4}|2\\d{7}|32[0-467]\\d{5})|(?:3[2-5]\\d|[47][1-35]\\d|5[1-3578]\\d|6[13-57]\\d|8(?:0[1-9]|[1-9]\\d)|9[3-9]\\d)\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "800123456",
            "shared_cost": "6001234567",
            "voip": "441234567",
            "fixed_line": "221234567",
            "mobile": "961234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2[23]"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[357]|4[1-35]|6[13-57]|8(?:0[1-9]|[1-9])"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(44)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "44"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([68]00)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[68]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(600)(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "600"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(1230)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "123",
                  "1230"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{5})(\\d{4})",
               "leading_digits_patterns": [
                  "219"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            9,
            10,
            11
         ]
      },
      "CM": {
         "phone_code": "237",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[26]\\d\\d|88)\\d{6}",
         "types": {
            "toll_free": {
               "pattern": "88\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "2(?:22|33|4[23])\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "6[5-9]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "88012345",
            "fixed_line": "222123456",
            "mobile": "671234567"
         },
         "formats": [
            {
               "pattern": "([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[26]"
               ],
               "format": "$1 $2 $3 $4 $5"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[23]|88"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "CN": {
         "phone_code": "86",
         "idd_prefix": "(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))|0",
         "types": {
            "premium_rate": {
               "pattern": "16[08]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "(?:10)?800\\d{7}",
               "possible_lengths": [
                  10,
                  12
               ]
            },
            "shared_cost": {
               "pattern": "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10,
                  11
               ]
            },
            "fixed_line": {
               "pattern": "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})"
            },
            "mobile": {
               "pattern": "1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|66\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[89]\\d{2})\\d{6}",
               "possible_lengths": [
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "16812345",
            "toll_free": "8001234567",
            "shared_cost": "4001234567",
            "fixed_line": "1012345678",
            "mobile": "13123456789"
         },
         "formats": [
            {
               "pattern": "([48]00)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[48]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{5,6})",
               "leading_digits_patterns": [
                  "(?:10|2\\d)[19]",
                  "(?:10|2\\d)(?:10|9[56])",
                  "(?:10|2\\d)(?:100|9[56])"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "[3-9]",
                  "[3-9]\\d\\d[19]",
                  "[3-9]\\d\\d(?:10|9[56])"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(21)(\\d{4})(\\d{4,6})",
               "leading_digits_patterns": [
                  "21"
               ],
               "national_prefix_formatting_rule": "0$1",
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([12]\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "10[1-9]|2[02-9]",
                  "10[1-9]|2[02-9]",
                  "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"
               ],
               "national_prefix_formatting_rule": "0$1",
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"
               ],
               "national_prefix_formatting_rule": "0$1",
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "807",
                  "8078"
               ],
               "national_prefix_formatting_rule": "0$1",
               "national_prefix_is_optional_when_formatting": true,
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[3-57-9]|66)"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(10800)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "108",
                  "1080",
                  "10800"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{7,8})",
               "leading_digits_patterns": [
                  "950"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "CO": {
         "phone_code": "57",
         "idd_prefix": "00(?:4(?:[14]4|56)|[579])",
         "national_number_pattern": "(?:1\\d|3)\\d{9}|[124-8]\\d{7}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0([3579]|4(?:44|56))?",
         "types": {
            "premium_rate": {
               "pattern": "19(?:0[01]|4[78])\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "toll_free": {
               "pattern": "1800\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "fixed_line": {
               "pattern": "[124-8][2-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "19001234567",
            "toll_free": "18001234567",
            "fixed_line": "12345678",
            "mobile": "3211234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{7})",
               "leading_digits_patterns": [
                  "1(?:[2-7]|8[2-9]|9[0-3])|[24-8]",
                  "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"
               ],
               "national_prefix_formatting_rule": "($1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{7})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1)(\\d{3})(\\d{7})",
               "leading_digits_patterns": [
                  "1(?:80|9[04])",
                  "1(?:800|9(?:0[01]|4[78]))"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2-$3",
               "international_format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            10,
            11
         ]
      },
      "CR": {
         "phone_code": "506",
         "idd_prefix": "00",
         "national_number_pattern": "(?:8\\d|90)\\d{8}|[24-8]\\d{7}",
         "national_prefix_for_parsing": "(19(?:0[012468]|1[09]|20|66|77|99))",
         "types": {
            "premium_rate": {
               "pattern": "90[059]\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "210[0-6]\\d{4}|4\\d{7}|5100\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "2(?:[024-7]\\d{2}|1(?:0[7-9]|[1-9]\\d))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "5(?:0[01]|7[0-3])\\d{5}|6(?:[0-4]\\d{3}|500[01])\\d{3}|(?:7[0-3]|8[3-9])\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "voip": "40001234",
            "fixed_line": "22123456",
            "mobile": "83123456"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[24-7]|8[3-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]0"
               ],
               "format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            8,
            10
         ]
      },
      "CU": {
         "phone_code": "53",
         "idd_prefix": "119",
         "national_number_pattern": "[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "fixed_line": {
               "pattern": "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}"
            },
            "mobile": {
               "pattern": "5\\d{7}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "fixed_line": "71234567",
            "mobile": "51234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{6,7})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4,6})",
               "leading_digits_patterns": [
                  "[2-4]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d)(\\d{7})",
               "leading_digits_patterns": [
                  "5"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8
         ]
      },
      "CV": {
         "phone_code": "238",
         "idd_prefix": "0",
         "national_number_pattern": "[2-59]\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}"
            },
            "mobile": {
               "pattern": "(?:[34][36]|5[1-389]|9\\d)\\d{5}"
            }
         },
         "examples": {
            "fixed_line": "2211234",
            "mobile": "9911234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "CW": {
         "phone_code": "599",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
         "types": {
            "shared_cost": {
               "pattern": "60[0-2]\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "pager": {
               "pattern": "955\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "shared_cost": "6001234",
            "pager": "95581234",
            "fixed_line": "94151234",
            "mobile": "95181234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[13-7]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "CX": {
         "phone_code": "61",
         "idd_prefix": "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]",
         "default_idd_prefix": "0011",
         "national_number_pattern": "1\\d{5,9}|[458]\\d{8}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "19(?:0[0126]\\d|[679])\\d{5}",
               "possible_lengths": [
                  8,
                  10
               ]
            },
            "toll_free": {
               "pattern": "180(?:0\\d{3}|2)\\d{3}",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "shared_cost": {
               "pattern": "13(?:00\\d{2})?\\d{4}",
               "possible_lengths": [
                  6,
                  8,
                  10
               ]
            },
            "voip": {
               "pattern": "550\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "personal_number": {
               "pattern": "500\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "shared_cost": "1300123456",
            "voip": "550123456",
            "personal_number": "500123456",
            "fixed_line": "891641234",
            "mobile": "412345678"
         },
         "formats": [
            {
               "pattern": "([2378])(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2378]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "14|[45]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(16)(\\d{3,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(16)(\\d{3})(\\d{2,4})",
               "leading_digits_patterns": [
                  "16"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[389]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[389]0",
                  "1(?:[38]0|9)0"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(180)(2\\d{3})",
               "leading_digits_patterns": [
                  "180",
                  "1802"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d)(\\d{3})",
               "leading_digits_patterns": [
                  "19[13]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(19\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "19[679]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(13)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "13[1-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10
         ]
      },
      "CY": {
         "phone_code": "357",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[279]\\d|[58]0)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "90[09]\\d{5}"
            },
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "shared_cost": {
               "pattern": "80[1-9]\\d{5}"
            },
            "personal_number": {
               "pattern": "700\\d{5}"
            },
            "uan": {
               "pattern": "(?:50|77)\\d{6}"
            },
            "fixed_line": {
               "pattern": "2[2-6]\\d{6}"
            },
            "mobile": {
               "pattern": "9[4-79]\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80001234",
            "shared_cost": "80112345",
            "personal_number": "70012345",
            "uan": "77123456",
            "fixed_line": "22345678",
            "mobile": "96123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{6})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "CZ": {
         "phone_code": "420",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-578]\\d|60|9\\d{1,4})\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "9(?:0[05689]|76)\\d{6}"
            },
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "shared_cost": {
               "pattern": "8[134]\\d{7}"
            },
            "voip": {
               "pattern": "9[17]0\\d{6}"
            },
            "personal_number": {
               "pattern": "70[01]\\d{6}"
            },
            "uan": {
               "pattern": "9(?:5\\d|7[234])\\d{6}"
            },
            "fixed_line": {
               "pattern": "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}"
            },
            "mobile": {
               "pattern": "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "811234567",
            "voip": "910123456",
            "personal_number": "700123456",
            "uan": "972123456",
            "fixed_line": "212345678",
            "mobile": "601123456"
         },
         "formats": [
            {
               "pattern": "([2-9]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2-8]|9[015-7]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(96\\d)(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "96"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(9\\d)(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "9[36]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "DE": {
         "phone_code": "49",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1|[358]\\d{11})\\d{3}|[1-35689]\\d{13}|4(?:[0-8]\\d{5,12}|9(?:[05]\\d|44|6[1-8])\\d{9})|[1-35-9]\\d{6,12}|49(?:[0-357]\\d|[46][1-8])\\d{4,8}|49(?:[0-3579]\\d|4[1-9]|6[0-8])\\d{3}|[1-9]\\d{5}|[13-68]\\d{4}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})",
               "possible_lengths": [
                  10,
                  11
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7,12}",
               "possible_lengths": [
                  10,
                  11,
                  12,
                  13,
                  14,
                  15
               ]
            },
            "shared_cost": {
               "pattern": "1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "personal_number": {
               "pattern": "700\\d{8}",
               "possible_lengths": [
                  11
               ]
            },
            "pager": {
               "pattern": "16(?:4\\d{1,10}|[89]\\d{1,11})",
               "possible_lengths": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "uan": {
               "pattern": "18(?:1\\d{5,11}|[2-9]\\d{8})",
               "possible_lengths": [
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "fixed_line": {
               "pattern": "2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|[1-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15
               ]
            },
            "mobile": {
               "pattern": "1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})",
               "possible_lengths": [
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567890",
            "shared_cost": "18012345",
            "personal_number": "70012345678",
            "pager": "16412345",
            "uan": "18500123456",
            "fixed_line": "30123456",
            "mobile": "15123456789"
         },
         "formats": [
            {
               "pattern": "(1\\d{2})(\\d{7,8})",
               "leading_digits_patterns": [
                  "1[67]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(15\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "15[0568]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1\\d{3})(\\d{7})",
               "leading_digits_patterns": [
                  "15"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{3,11})",
               "leading_digits_patterns": [
                  "3[02]|40|[68]9"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3,11})",
               "leading_digits_patterns": [
                  "2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)",
                  "2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{2,11})",
               "leading_digits_patterns": [
                  "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])",
                  "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(3\\d{4})(\\d{1,10})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{7,12})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d)(\\d{4,10})",
               "leading_digits_patterns": [
                  "1(?:37|80)|900",
                  "1(?:37|80)|900[1359]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1\\d{2})(\\d{5,11})",
               "leading_digits_patterns": [
                  "181"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(18\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "185",
                  "1850",
                  "18500"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(18\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "18[68]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(18\\d)(\\d{8})",
               "leading_digits_patterns": [
                  "18[2-579]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(700)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "700"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(138)(\\d{4})",
               "leading_digits_patterns": [
                  "138"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(15[013-68])(\\d{2})(\\d{8})",
               "leading_digits_patterns": [
                  "15[013-68]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(15[279]\\d)(\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "15[279]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[67]\\d)(\\d{2})(\\d{7,8})",
               "leading_digits_patterns": [
                  "1(?:6[023]|7)"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
         ]
      },
      "DJ": {
         "phone_code": "253",
         "idd_prefix": "00",
         "national_number_pattern": "(?:2\\d|77)\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:1[2-5]|7[45])\\d{5}"
            },
            "mobile": {
               "pattern": "77\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "21360003",
            "mobile": "77831001"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "DK": {
         "phone_code": "45",
         "idd_prefix": "00",
         "national_number_pattern": "[2-9]\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{6}"
            },
            "toll_free": {
               "pattern": "80\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "fixed_line": "32123456",
            "mobile": "20123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "DM": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "767",
         "national_number_pattern": "(?:[58]\\d\\d|767|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}"
            },
            "mobile": {
               "pattern": "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "7674201234",
            "mobile": "7672251234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "DO": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "8[024]9",
         "national_number_pattern": "(?:[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})"
            },
            "mobile": {
               "pattern": "8[024]9[2-9]\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "8092345678",
            "mobile": "8092345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "DZ": {
         "phone_code": "213",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[1-4]|[5-79]\\d|80)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "80[3-689]1\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "shared_cost": {
               "pattern": "80[12]1\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "98[23]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}"
            },
            "mobile": {
               "pattern": "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "808123456",
            "toll_free": "800123456",
            "shared_cost": "801123456",
            "voip": "983123456",
            "fixed_line": "12345678",
            "mobile": "551234567"
         },
         "formats": [
            {
               "pattern": "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[1-4]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[5-8]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(9\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "EC": {
         "phone_code": "593",
         "idd_prefix": "00",
         "national_number_pattern": "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "toll_free": {
               "pattern": "1800\\d{6,7}",
               "possible_lengths": [
                  10,
                  11
               ]
            },
            "voip": {
               "pattern": "[2-7]890\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "[2-7][2-7]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "18001234567",
            "voip": "28901234",
            "fixed_line": "22123456",
            "mobile": "991234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[247]|[356][2-8]"
               ],
               "format": "$1 $2-$3",
               "international_format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1800)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "180",
                  "1800"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10,
            11
         ]
      },
      "EE": {
         "phone_code": "372",
         "idd_prefix": "00",
         "national_number_pattern": "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "(?:40\\d{2}|900)\\d{4}",
               "possible_lengths": [
                  7,
                  8
               ]
            },
            "toll_free": {
               "pattern": "800(?:0\\d{3}|1\\d|[2-9])\\d{3}"
            },
            "personal_number": {
               "pattern": "70[0-2]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",
               "possible_lengths": [
                  7,
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234",
            "toll_free": "80012345",
            "personal_number": "70012345",
            "fixed_line": "3212345",
            "mobile": "51234567"
         },
         "formats": [
            {
               "pattern": "([3-79]\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]",
                  "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(70)(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "70"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8000)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "800",
                  "8000"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([458]\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "40|5|8(?:00|[1-5])",
                  "40|5|8(?:00[1-9]|[1-5])"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8,
            10
         ]
      },
      "EG": {
         "phone_code": "20",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[189]\\d?|[24-6])\\d{8}|[13]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|5\\d|7[23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "1[0125]\\d{8}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "fixed_line": "234567890",
            "mobile": "1001234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{7,8})",
               "leading_digits_patterns": [
                  "[23]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{6,7})",
               "leading_digits_patterns": [
                  "1(?:3|5[239])|[4-6]|[89][2-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1[0-25]|[89]00"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "EH": {
         "phone_code": "212",
         "idd_prefix": "00",
         "leading_digits": "528[89]",
         "national_number_pattern": "[5-8]\\d{8}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "89\\d{7}"
            },
            "toll_free": {
               "pattern": "80\\d{7}"
            },
            "voip": {
               "pattern": "5924[01]\\d{4}"
            },
            "fixed_line": {
               "pattern": "528[89]\\d{5}"
            },
            "mobile": {
               "pattern": "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "891234567",
            "toll_free": "801234567",
            "voip": "592401234",
            "fixed_line": "528812345",
            "mobile": "650123456"
         },
         "formats": [
            {
               "pattern": "([5-7]\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "5(?:2[015-7]|3[0-4])|[67]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "([58]\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "5(?:2[2-489]|3[5-9]|92)|892",
                  "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(5\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "5(?:29|38)",
                  "5(?:29|38)[89]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "5(?:4[067]|5[03])"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(8[09])(\\d{7})",
               "leading_digits_patterns": [
                  "8(?:0|9[013-9])"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "ER": {
         "phone_code": "291",
         "idd_prefix": "00",
         "national_number_pattern": "[178]\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}"
            },
            "mobile": {
               "pattern": "17[1-3]\\d{4}|7\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "8370362",
            "mobile": "7123456"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "ES": {
         "phone_code": "34",
         "idd_prefix": "00",
         "national_number_pattern": "(?:51|[6-9]\\d)\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "80[367]\\d{6}"
            },
            "toll_free": {
               "pattern": "[89]00\\d{6}"
            },
            "shared_cost": {
               "pattern": "90[12]\\d{6}"
            },
            "personal_number": {
               "pattern": "70\\d{7}"
            },
            "uan": {
               "pattern": "51\\d{7}"
            },
            "fixed_line": {
               "pattern": "8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{6}|9(?:[135]\\d{7}|[28][0-8]\\d{6}|4[1-9]\\d{6}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})"
            },
            "mobile": {
               "pattern": "(?:6\\d{6}|7[1-48]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}"
            }
         },
         "examples": {
            "premium_rate": "803123456",
            "toll_free": "800123456",
            "shared_cost": "901123456",
            "personal_number": "701234567",
            "uan": "511234567",
            "fixed_line": "810123456",
            "mobile": "612345678"
         },
         "formats": [
            {
               "pattern": "([89]00)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[89]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[568]|[79][0-8]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "ET": {
         "phone_code": "251",
         "idd_prefix": "00",
         "national_number_pattern": "(?:11|[2-59]\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}"
            },
            "mobile": {
               "pattern": "9\\d{8}"
            }
         },
         "examples": {
            "fixed_line": "111112345",
            "mobile": "911234567"
         },
         "formats": [
            {
               "pattern": "([1-59]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-59]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "FI": {
         "phone_code": "358",
         "idd_prefix": "00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:1\\d|[2-689])\\d{4,10}|7\\d{4,9}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "[67]00\\d{5,6}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4,7}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            },
            "uan": {
               "pattern": "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}"
            },
            "mobile": {
               "pattern": "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9,
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "600123456",
            "toll_free": "8001234567",
            "uan": "10112345",
            "fixed_line": "1312345678",
            "mobile": "412345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3,7})",
               "leading_digits_patterns": [
                  "(?:[1-3]0|[6-8])0"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(75\\d{3})",
               "leading_digits_patterns": [
                  "75[12]"
               ],
               "format": "$1"
            },
            {
               "pattern": "(116\\d{3})",
               "leading_digits_patterns": [
                  "116"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1"
            },
            {
               "pattern": "(\\d{2})(\\d{4,10})",
               "leading_digits_patterns": [
                  "[14]|2[09]|50|7[135]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d)(\\d{4,11})",
               "leading_digits_patterns": [
                  "[25689][1-8]|3"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "FJ": {
         "phone_code": "679",
         "idd_prefix": "0(?:0|52)",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:(?:0800\\d|[235-9])\\d|45)\\d{5}",
         "types": {
            "toll_free": {
               "pattern": "0800\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "fixed_line": {
               "pattern": "(?:3[0-5]\\d|6(?:03|[25-7]\\d)|8[58]\\d)\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "toll_free": "08001234567",
            "fixed_line": "3212345",
            "mobile": "7012345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "0"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            11
         ]
      },
      "FK": {
         "phone_code": "500",
         "idd_prefix": "00",
         "national_number_pattern": "[2-7]\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "[2-47]\\d{4}"
            },
            "mobile": {
               "pattern": "[56]\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "31234",
            "mobile": "51234"
         },
         "formats": [],
         "possible_lengths": [
            5
         ]
      },
      "FM": {
         "phone_code": "691",
         "idd_prefix": "00",
         "national_number_pattern": "[39]\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}"
            },
            "mobile": {
               "pattern": "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}"
            }
         },
         "examples": {
            "fixed_line": "3201234",
            "mobile": "3501234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "FO": {
         "phone_code": "298",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-8]\\d|90)\\d{4}",
         "national_prefix_for_parsing": "(10(?:01|[12]0|88))",
         "types": {
            "premium_rate": {
               "pattern": "90(?:[1345][15-7]|2[125-7]|99)\\d{2}"
            },
            "toll_free": {
               "pattern": "80[257-9]\\d{3}"
            },
            "voip": {
               "pattern": "(?:6[0-36]|88)\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:20|[3-4]\\d|8[19])\\d{4}"
            },
            "mobile": {
               "pattern": "(?:[27][1-9]|5\\d)\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "901123",
            "toll_free": "802123",
            "voip": "601234",
            "fixed_line": "201234",
            "mobile": "211234"
         },
         "formats": [
            {
               "pattern": "(\\d{6})",
               "format": "$1"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "FR": {
         "phone_code": "33",
         "idd_prefix": "00",
         "national_number_pattern": "[1-9]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "8[129]\\d{7}"
            },
            "toll_free": {
               "pattern": "80[0-5]\\d{6}"
            },
            "shared_cost": {
               "pattern": "884\\d{6}"
            },
            "voip": {
               "pattern": "9\\d{8}"
            },
            "uan": {
               "pattern": "80[6-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "[1-5]\\d{8}"
            },
            "mobile": {
               "pattern": "(?:6\\d|7[3-9])\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "891123456",
            "toll_free": "801234567",
            "shared_cost": "884012345",
            "voip": "912345678",
            "uan": "806123456",
            "fixed_line": "123456789",
            "mobile": "612345678"
         },
         "formats": [
            {
               "pattern": "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[1-79]"
               ],
               "format": "$1 $2 $3 $4 $5"
            },
            {
               "pattern": "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "8"
               ],
               "national_prefix_formatting_rule": "0 $1",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "GA": {
         "phone_code": "241",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0\\d|[2-7])\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "01\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "0?[2-7]\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "01441234",
            "mobile": "06031234"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2-7]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "0"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "GB": {
         "phone_code": "44",
         "idd_prefix": "00",
         "ext": " x",
         "national_number_pattern": "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "80(?:0(?:1111|\\d{6,7})|8\\d{7})"
            },
            "shared_cost": {
               "pattern": "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "voip": {
               "pattern": "56\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "70\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "pager": {
               "pattern": "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "(?:3[0347]|55)\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "mobile": {
               "pattern": "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "9012345678",
            "toll_free": "8001234567",
            "shared_cost": "8431234567",
            "voip": "5612345678",
            "personal_number": "7012345678",
            "pager": "7640123456",
            "uan": "5512345678",
            "fixed_line": "1212345678",
            "mobile": "7400123456"
         },
         "formats": [
            {
               "pattern": "(7\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "7(?:[1-57-9]|62)",
                  "7(?:[1-57-9]|624)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2|5[56]|7[06]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[02-9]1|1)|3|9[018]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{5})(\\d{4,5})",
               "leading_digits_patterns": [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{4})",
               "leading_digits_patterns": [
                  "800",
                  "8001",
                  "80011",
                  "800111",
                  "8001111"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(845)(46)(4\\d)",
               "leading_digits_patterns": [
                  "845",
                  "8454",
                  "84546",
                  "845464"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8(?:4[2-5]|7[0-3])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{6})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            9,
            10
         ]
      },
      "GD": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "473",
         "national_number_pattern": "(?:473|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}"
            },
            "mobile": {
               "pattern": "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "4732691234",
            "mobile": "4734031234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "GE": {
         "phone_code": "995",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[3-57]\\d\\d|800)\\d{6}",
         "national_prefix": "0",
         "types": {
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "voip": {
               "pattern": "706\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}"
            },
            "mobile": {
               "pattern": "(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}"
            }
         },
         "examples": {
            "toll_free": "800123456",
            "voip": "706123456",
            "fixed_line": "322123456",
            "mobile": "555123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[348]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "5|790"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "7"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "GF": {
         "phone_code": "594",
         "idd_prefix": "00",
         "national_number_pattern": "[56]94\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}"
            },
            "mobile": {
               "pattern": "694(?:[0-249]\\d|3[0-48])\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "594101234",
            "mobile": "694201234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "GG": {
         "phone_code": "44",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "80(?:0(?:1111|\\d{6,7})|8\\d{7})"
            },
            "shared_cost": {
               "pattern": "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "voip": {
               "pattern": "56\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "70\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "pager": {
               "pattern": "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "(?:3[0347]|55)\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "1481[25-9]\\d{5}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "7(?:781\\d|839\\d|911[17])\\d{5}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "9012345678",
            "toll_free": "8001234567",
            "shared_cost": "8431234567",
            "voip": "5612345678",
            "personal_number": "7012345678",
            "pager": "7640123456",
            "uan": "5512345678",
            "fixed_line": "1481256789",
            "mobile": "7781123456"
         },
         "formats": [
            {
               "pattern": "(7\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "7(?:[1-57-9]|62)",
                  "7(?:[1-57-9]|624)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2|5[56]|7[06]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[02-9]1|1)|3|9[018]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{5})(\\d{4,5})",
               "leading_digits_patterns": [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{4})",
               "leading_digits_patterns": [
                  "800",
                  "8001",
                  "80011",
                  "800111",
                  "8001111"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(845)(46)(4\\d)",
               "leading_digits_patterns": [
                  "845",
                  "8454",
                  "84546",
                  "845464"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8(?:4[2-5]|7[0-3])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{6})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            9,
            10
         ]
      },
      "GH": {
         "phone_code": "233",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[235]\\d{3}|800)\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:2[034678]\\d|5(?:[0457]\\d|6[01]))\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "80012345",
            "fixed_line": "302345678",
            "mobile": "231234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[235]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "GI": {
         "phone_code": "350",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[25]\\d|62)\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:00\\d{2}|1(?:6[24-7]\\d|90[0-2])|2(?:2[2457]\\d|50[0-2]))\\d{3}"
            },
            "mobile": {
               "pattern": "(?:5[46-8]|62)\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "20012345",
            "mobile": "57123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "GL": {
         "phone_code": "299",
         "idd_prefix": "00",
         "national_number_pattern": "(?:19|[2-689]\\d)\\d{4}",
         "types": {
            "toll_free": {
               "pattern": "80\\d{4}"
            },
            "voip": {
               "pattern": "3[89]\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:[25][1-9]|4[2-9])\\d{4}"
            }
         },
         "examples": {
            "toll_free": "801234",
            "voip": "381234",
            "fixed_line": "321000",
            "mobile": "221234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "GM": {
         "phone_code": "220",
         "idd_prefix": "00",
         "national_number_pattern": "[2-9]\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}"
            },
            "mobile": {
               "pattern": "[23679]\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "5661234",
            "mobile": "3012345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "GN": {
         "phone_code": "224",
         "idd_prefix": "00",
         "national_number_pattern": "(?:30|6\\d\\d|722)\\d{6}",
         "types": {
            "voip": {
               "pattern": "722\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "6[02356]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "voip": "722123456",
            "fixed_line": "30241234",
            "mobile": "601123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[67]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "GP": {
         "phone_code": "590",
         "idd_prefix": "00",
         "national_number_pattern": "(?:590|69\\d)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"
            },
            "mobile": {
               "pattern": "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "590201234",
            "mobile": "690001234"
         },
         "formats": [
            {
               "pattern": "([56]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "590|69[01]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "GQ": {
         "phone_code": "240",
         "idd_prefix": "00",
         "national_number_pattern": "(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d[1-9]\\d{5}"
            },
            "toll_free": {
               "pattern": "80\\d[1-9]\\d{5}"
            },
            "fixed_line": {
               "pattern": "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}"
            },
            "mobile": {
               "pattern": "(?:222|55[15])\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "fixed_line": "333091234",
            "mobile": "222123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[235]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "GR": {
         "phone_code": "30",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[268]\\d|[79]0)\\d{8}",
         "types": {
            "premium_rate": {
               "pattern": "90[19]\\d{7}"
            },
            "toll_free": {
               "pattern": "800\\d{7}"
            },
            "shared_cost": {
               "pattern": "8(?:0[16]|12|25)\\d{7}"
            },
            "personal_number": {
               "pattern": "70\\d{8}"
            },
            "fixed_line": {
               "pattern": "2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}"
            },
            "mobile": {
               "pattern": "6(?:8[57-9]|9\\d)\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "9091234567",
            "toll_free": "8001234567",
            "shared_cost": "8011234567",
            "personal_number": "7012345678",
            "fixed_line": "2123456789",
            "mobile": "6912345678"
         },
         "formats": [
            {
               "pattern": "([27]\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "21|7"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2[2-9]1|[689]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "2[2-9][02-9]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "GT": {
         "phone_code": "502",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1\\d{3}|[2-7])\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "19\\d{9}",
               "possible_lengths": [
                  11
               ]
            },
            "toll_free": {
               "pattern": "18[01]\\d{8}",
               "possible_lengths": [
                  11
               ]
            },
            "fixed_line": {
               "pattern": "[267][2-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "[345]\\d{7}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "19001112222",
            "toll_free": "18001112222",
            "fixed_line": "22456789",
            "mobile": "51234567"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-7]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            11
         ]
      },
      "GU": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "671",
         "national_number_pattern": "(?:[58]\\d\\d|671|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[079]7|2[0167]|3[45]|47|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "6713001234",
            "mobile": "6713001234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "GW": {
         "phone_code": "245",
         "idd_prefix": "00",
         "national_number_pattern": "[49]\\d{8}|4\\d{6}",
         "types": {
            "voip": {
               "pattern": "40\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "443\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "9(?:5\\d|6[569]|77)\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "voip": "4012345",
            "fixed_line": "443201234",
            "mobile": "955012345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "44|9[5-7]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "40"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            9
         ]
      },
      "GY": {
         "phone_code": "592",
         "idd_prefix": "001",
         "national_number_pattern": "(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}",
         "types": {
            "premium_rate": {
               "pattern": "9008\\d{3}"
            },
            "toll_free": {
               "pattern": "(?:289|862)\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}"
            },
            "mobile": {
               "pattern": "6\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "9008123",
            "toll_free": "2891234",
            "fixed_line": "2201234",
            "mobile": "6091234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "HK": {
         "phone_code": "852",
         "idd_prefix": "00(?:[126-9]|30|5[09])?",
         "default_idd_prefix": "00",
         "national_number_pattern": "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "900(?:[0-24-9]\\d{7}|3\\d{1,4})",
               "possible_lengths": [
                  5,
                  6,
                  7,
                  8,
                  11
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "personal_number": {
               "pattern": "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "pager": {
               "pattern": "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:[1569][0-24-9]\\d|4[0-246-9]\\d|7[0-24-69]\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:46(?:0[0-6]|10|4[0-57-9])|5(?:[1-59][0-46-9]\\d|6[0-4689]\\d|7(?:[0-2469]\\d|30))|6(?:0[1-9]\\d|[13-59]\\d{2}|2(?:[0-57-9]\\d|6[01])|[68][0-57-9]\\d|7[0-79]\\d)|707[1-5]|8480|9(?:0[1-9]\\d|1[02-9]\\d|2(?:[0-8]\\d|9[03-9])|[358][0-8]\\d|[467]\\d{2}))\\d{4}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345678",
            "toll_free": "800123456",
            "personal_number": "81123456",
            "pager": "71123456",
            "uan": "30161234",
            "fixed_line": "21234567",
            "mobile": "51234567"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-7]|[89](?:0[1-9]|[1-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(900)(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "900"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(900)(\\d{2,5})",
               "leading_digits_patterns": [
                  "900"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            11
         ]
      },
      "HN": {
         "phone_code": "504",
         "idd_prefix": "00",
         "national_number_pattern": "[237-9]\\d{7}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|7[013689]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[03-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}"
            },
            "mobile": {
               "pattern": "[37-9]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "22123456",
            "mobile": "91234567"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "HR": {
         "phone_code": "385",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "6(?:[01]\\d{0,2}|[459]\\d{2})\\d{4}",
               "possible_lengths": [
                  6,
                  7,
                  8
               ]
            },
            "toll_free": {
               "pattern": "80[01]\\d{4,6}",
               "possible_lengths": [
                  7,
                  8,
                  9
               ]
            },
            "personal_number": {
               "pattern": "7[45]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "(?:62\\d?|72)\\d{6}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "fixed_line": {
               "pattern": "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "9(?:01\\d|[1259]\\d{2}|7(?:[0679]\\d|51)|8\\d{1,2})\\d{5}",
               "possible_lengths": [
                  8,
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "611234",
            "toll_free": "800123456",
            "personal_number": "74123456",
            "uan": "62123456",
            "fixed_line": "12345678",
            "mobile": "921234567"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([2-5]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[2-5]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(6[01])(\\d{2})(\\d{2,3})",
               "leading_digits_patterns": [
                  "6[01]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([67]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[67]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80[01])(\\d{2})(\\d{2,3})",
               "leading_digits_patterns": [
                  "80[01]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80[01])(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "80[01]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "HT": {
         "phone_code": "509",
         "idd_prefix": "00",
         "national_number_pattern": "[2-489]\\d{7}",
         "types": {
            "toll_free": {
               "pattern": "8\\d{7}"
            },
            "voip": {
               "pattern": "(?:9(?:[67][0-4]|8[0-3589]|9\\d))\\d{5}"
            },
            "fixed_line": {
               "pattern": "2(?:2\\d|5[1-5]|81|9[149])\\d{5}"
            },
            "mobile": {
               "pattern": "[34]\\d{7}"
            }
         },
         "examples": {
            "toll_free": "80012345",
            "voip": "98901234",
            "fixed_line": "22453300",
            "mobile": "34101234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{4})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "HU": {
         "phone_code": "36",
         "idd_prefix": "00",
         "national_number_pattern": "[2357]\\d{8}|[1-9]\\d{7}",
         "national_prefix": "06",
         "national_prefix_formatting_rule": "($1)",
         "types": {
            "premium_rate": {
               "pattern": "9[01]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "[48]0\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "21\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "38\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:[257]0|3[01])\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "voip": "211234567",
            "uan": "381234567",
            "fixed_line": "12345678",
            "mobile": "201234567"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[2-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "ID": {
         "phone_code": "62",
         "idd_prefix": "0(?:0[1789]|10(?:00|1[67]))",
         "national_number_pattern": "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "809\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "177\\d{6,8}|800\\d{5,7}",
               "possible_lengths": [
                  8,
                  9,
                  10,
                  11
               ]
            },
            "shared_cost": {
               "pattern": "804\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "1500\\d{3}|8071\\d{6}",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "2(?:1(?:14\\d{3}|500\\d{3}|\\d{7,8})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10,
                  11
               ]
            },
            "mobile": {
               "pattern": "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359])|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}",
               "possible_lengths": [
                  9,
                  10,
                  11,
                  12
               ]
            }
         },
         "examples": {
            "premium_rate": "8091234567",
            "toll_free": "8001234567",
            "shared_cost": "8041234567",
            "uan": "8071123456",
            "fixed_line": "218350123",
            "mobile": "812345678"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{5,8})",
               "leading_digits_patterns": [
                  "2[124]|[36]1"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5,8})",
               "leading_digits_patterns": [
                  "2[035-9]|[36][02-9]|[4579]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(8\\d{2})(\\d{3,4})(\\d{3})",
               "leading_digits_patterns": [
                  "8[1-35-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(8\\d{2})(\\d{4})(\\d{4,5})",
               "leading_digits_patterns": [
                  "8[1-35-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(1)(500)(\\d{3})",
               "leading_digits_patterns": [
                  "150",
                  "1500"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(177)(\\d{6,8})",
               "leading_digits_patterns": [
                  "177"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{5,7})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(804)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "804"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "80[79]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "IE": {
         "phone_code": "353",
         "idd_prefix": "00",
         "national_number_pattern": "[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "premium_rate": {
               "pattern": "15(?:1[2-8]|[2-8]0|9[089])\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "1800\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "shared_cost": {
               "pattern": "18[59]0\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "76\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "personal_number": {
               "pattern": "700\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "818\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})"
            },
            "mobile": {
               "pattern": "8(?:22\\d{6}|[35-9]\\d{7})",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1520123456",
            "toll_free": "1800123456",
            "shared_cost": "1850123456",
            "voip": "761234567",
            "personal_number": "700123456",
            "uan": "818123456",
            "fixed_line": "2212345",
            "mobile": "850123456"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "2[24-9]|47|58|6[237-9]|9[35-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "40[24]|50[45]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(48)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "48"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(818)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "818"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[24-69]|7[14]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "76|8[35-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8\\d)(\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8[35-9]5"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(700)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "700"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1(?:5|8[059])",
                  "1(?:5|8[059]0)"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10
         ]
      },
      "IL": {
         "phone_code": "972",
         "idd_prefix": "0(?:0|1[2-9])",
         "national_number_pattern": "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}|[2-689]\\d{3}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}",
               "possible_lengths": [
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "1(?:80[019]\\d{3}|255)\\d{3}",
               "possible_lengths": [
                  7,
                  10
               ]
            },
            "shared_cost": {
               "pattern": "1700\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6[58]\\d|7\\d{2}|8(?:2\\d|33|55|77|81)|9[2579]\\d)\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "[2-689]\\d{3}|1599\\d{6}",
               "possible_lengths": [
                  4,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:153\\d{1,2}|[2-489])\\d{7}",
               "possible_lengths": [
                  8,
                  11,
                  12
               ]
            },
            "mobile": {
               "pattern": "5(?:[0-489][2-9]\\d|5(?:01|2[2-5]|3[23]|4[45]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9])|6\\d{2})\\d{5}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1919123456",
            "toll_free": "1800123456",
            "shared_cost": "1700123456",
            "voip": "771234567",
            "uan": "1599123456",
            "fixed_line": "21234567",
            "mobile": "502345678"
         },
         "formats": [
            {
               "pattern": "([2-489])(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-489]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2-$3"
            },
            {
               "pattern": "([57]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[57]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(153)(\\d{1,2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "153"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(1)([7-9]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[7-9]"
               ],
               "format": "$1-$2-$3-$4"
            },
            {
               "pattern": "(1255)(\\d{3})",
               "leading_digits_patterns": [
                  "125",
                  "1255"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(1200)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "120",
                  "1200"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(1212)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "121",
                  "1212"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(1599)(\\d{6})",
               "leading_digits_patterns": [
                  "159",
                  "1599"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(151)(\\d{1,2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "151"
               ],
               "format": "$1-$2 $3-$4"
            },
            {
               "pattern": "(\\d{4})",
               "leading_digits_patterns": [
                  "[2-689]"
               ],
               "format": "*$1"
            }
         ],
         "possible_lengths": [
            4,
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "IM": {
         "phone_code": "44",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "(?:872299|90[0167]624)\\d{4}"
            },
            "toll_free": {
               "pattern": "808162\\d{4}"
            },
            "shared_cost": {
               "pattern": "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"
            },
            "voip": {
               "pattern": "56\\d{8}"
            },
            "personal_number": {
               "pattern": "70\\d{8}"
            },
            "uan": {
               "pattern": "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}"
            },
            "fixed_line": {
               "pattern": "1624[5-8]\\d{5}"
            },
            "mobile": {
               "pattern": "7(?:4576|[59]24\\d|624[0-4689])\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "9016247890",
            "toll_free": "8081624567",
            "shared_cost": "8456247890",
            "voip": "5612345678",
            "personal_number": "7012345678",
            "uan": "5512345678",
            "fixed_line": "1624756789",
            "mobile": "7924123456"
         },
         "formats": [
            {
               "pattern": "(7\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "7(?:[1-57-9]|62)",
                  "7(?:[1-57-9]|624)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2|5[56]|7[06]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[02-9]1|1)|3|9[018]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{5})(\\d{4,5})",
               "leading_digits_patterns": [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{4})",
               "leading_digits_patterns": [
                  "800",
                  "8001",
                  "80011",
                  "800111",
                  "8001111"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(845)(46)(4\\d)",
               "leading_digits_patterns": [
                  "845",
                  "8454",
                  "84546",
                  "845464"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8(?:4[2-5]|7[0-3])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{6})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "IN": {
         "phone_code": "91",
         "idd_prefix": "00",
         "national_number_pattern": "(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "186[12]\\d{9}",
               "possible_lengths": [
                  13
               ]
            },
            "toll_free": {
               "pattern": "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))"
            },
            "shared_cost": {
               "pattern": "1860\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "uan": {
               "pattern": "140\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "(?:6(?:0(?:0[0-359]|26)\\d|1279|2(?:[06][0-59]|3[0589]|8[0-49]|9[0-6])\\d|3(?:0[0-39]\\d|5(?:0[0-6]|[1-9]\\d)|6[0-3]\\d|7[015-9]\\d|8\\d{2}|9[0-79]\\d)|90[019]\\d)|7(?:0\\d{3}|19[0-5]\\d|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|[678][089]))|3(?:[05-8]\\d{2}|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|3[017-9]\\d|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d{2}|1(?:[015-9]\\d|[23][089]|4[089])|2(?:0[089]|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|[56]\\d[089]|7(?:[089]\\d|11|7[02-8])|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[089]|[89]\\d))|5(?:[0346-8]\\d{2}|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[123][089])|5[017-9]\\d|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d{2})|8(?:[0-79]\\d{2}|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d{2}|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:[01589]\\d{2}|6[67]\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d{2}|6(?:[089]\\d|7[02-8]))|2(?:0(?:[089]\\d|7[02-8])|[14](?:[089]\\d|7[02-8])|[235-9]\\d{2})|3(?:[0357-9]\\d{2}|1(?:[089]\\d|7[02-8])|2(?:[089]\\d|7[02-8])|4\\d{2}|6(?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d{2}|1(?:[089]\\d|7[02-8])|3(?:[089]\\d|7[02-8])|6(?:[08]\\d|7[02-8]|9\\d))|7(?:0[07-9]\\d|[1-69]\\d{2}|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d{2}|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d{2}|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "1861123456789",
            "toll_free": "1800123456",
            "shared_cost": "18603451234",
            "uan": "1409305260",
            "fixed_line": "7410410123",
            "mobile": "8123456789"
         },
         "formats": [
            {
               "pattern": "(\\d{8})",
               "leading_digits_patterns": [
                  "561",
                  "5616",
                  "56161"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1"
            },
            {
               "pattern": "(\\d{5})(\\d{5})",
               "leading_digits_patterns": [
                  "6(?:0[02]|12|2[03689]|3[05-9]|9[019])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9",
                  "6(?:0(?:0|26)|127|2(?:[06][0-59]|3[0589]|8[0-39]|9[0-46])|3(?:0[0-39]|5[0-46-9]|6[0-3]|7[015-9]|8|9[0-79])|9[019])|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9",
                  "6(?:0(?:0|26)|1279|2(?:[06][0-59]|3[0589]|8[0-39]|9[0-46])|3(?:0[0-39]|5[0-46-9]|6[0-3]|7[015-9]|8|9[0-79])|9[019])|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[02-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[04-9]))|1(?:[0-57-9]|6(?:[089]|7[02-8]))|2(?:[014](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|[126](?:[089]|7[02-8]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-8]))|9(?:[02-9]|1(?:[0289]|7[02-8])))|9"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "11|2[02]|33|4[04]|79[1-9]|80[2-46]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1(?:[23579]|[468][1-9])|[2-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "008"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "140"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "160",
                  "1600"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{4,5})",
               "leading_digits_patterns": [
                  "180",
                  "1800"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{2,4})(\\d{4})",
               "leading_digits_patterns": [
                  "180",
                  "1800"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "186",
                  "1860"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "18[06]"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10,
            11,
            12,
            13
         ]
      },
      "IO": {
         "phone_code": "246",
         "idd_prefix": "00",
         "national_number_pattern": "3\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "37\\d{5}"
            },
            "mobile": {
               "pattern": "38\\d{5}"
            }
         },
         "examples": {
            "fixed_line": "3709100",
            "mobile": "3801234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "IQ": {
         "phone_code": "964",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1|[2-6]\\d?|7\\d\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "7[3-9]\\d{8}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "fixed_line": "12345678",
            "mobile": "7912345678"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([2-6]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[2-6]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(7\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "IR": {
         "phone_code": "98",
         "idd_prefix": "00",
         "national_number_pattern": "[1-9]\\d{9}|[1-8]\\d{5,6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "voip": {
               "pattern": "993\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:\\d{8}|(?:[16]|[289]\\d?)\\d{3}))|94(?:000|11[0-7]|2\\d{2}|30[01]|4(?:11|40))\\d{5}"
            },
            "mobile": {
               "pattern": "9(?:0(?:[1-35]\\d{2}|44\\d)|[13]\\d{3}|2[0-2]\\d{2}|9(?:[01]\\d{2}|44\\d|8(?:10|88)|9(?:0[013]|1[134]|21|9[89])))\\d{5}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "voip": "9932123456",
            "fixed_line": "2123456789",
            "mobile": "9123456789"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{4,5})",
               "leading_digits_patterns": [
                  "[1-8]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4,5})",
               "leading_digits_patterns": [
                  "96"
               ],
               "format": "$1"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            10
         ]
      },
      "IS": {
         "phone_code": "354",
         "idd_prefix": "1(?:0(?:01|10|20)|100)|00",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:38\\d|[4-9])\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "voip": {
               "pattern": "49\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "uan": {
               "pattern": "809\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "38[589]\\d{6}|(?:6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9011234",
            "toll_free": "8001234",
            "voip": "4921234",
            "uan": "8091234",
            "fixed_line": "4101234",
            "mobile": "6111234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[4-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(3\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            9
         ]
      },
      "IT": {
         "phone_code": "39",
         "idd_prefix": "00",
         "national_number_pattern": "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",
         "types": {
            "premium_rate": {
               "pattern": "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
               "possible_lengths": [
                  6,
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "80(?:0\\d{6}|3\\d{3})",
               "possible_lengths": [
                  6,
                  9
               ]
            },
            "shared_cost": {
               "pattern": "84(?:[08]\\d{6}|[17]\\d{3})",
               "possible_lengths": [
                  6,
                  9
               ]
            },
            "voip": {
               "pattern": "55\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "1(?:78\\d|99)\\d{6}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "0(?:2\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])\\d|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)\\d|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])\\d|6(?:[0-57-9]\\d{2}|6(?:[0-8]\\d|9[0-79]))|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])\\d|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])\\d|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6])\\d)\\d{1,6})"
            },
            "mobile": {
               "pattern": "3(?:1\\d{8}|[245-9]\\d{7,8}|3\\d{7,9})",
               "possible_lengths": [
                  9,
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "899123456",
            "toll_free": "800123456",
            "shared_cost": "848123456",
            "voip": "5512345678",
            "personal_number": "1781234567",
            "fixed_line": "0212345678",
            "mobile": "3123456789"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "0[26]|55"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0[26])(\\d{4})(\\d{5})",
               "leading_digits_patterns": [
                  "0[26]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0[26])(\\d{4,6})",
               "leading_digits_patterns": [
                  "0[26]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(0\\d{2})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "0[13-57-9][0159]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3,6})",
               "leading_digits_patterns": [
                  "0[13-57-9][0159]|8(?:03|4[17]|9[245])",
                  "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(0\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "0[13-57-9][2-46-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0\\d{3})(\\d{2,6})",
               "leading_digits_patterns": [
                  "0[13-57-9][2-46-8]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[13]|8(?:00|4[08]|9[59])",
                  "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "894",
                  "894[5-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10,
            11
         ]
      },
      "JE": {
         "phone_code": "44",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}"
            },
            "toll_free": {
               "pattern": "80(?:07(?:35|81)|8901)\\d{4}"
            },
            "shared_cost": {
               "pattern": "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"
            },
            "voip": {
               "pattern": "56\\d{8}"
            },
            "personal_number": {
               "pattern": "701511\\d{4}"
            },
            "pager": {
               "pattern": "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"
            },
            "uan": {
               "pattern": "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}"
            },
            "fixed_line": {
               "pattern": "1534[0-24-8]\\d{5}"
            },
            "mobile": {
               "pattern": "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "9018105678",
            "toll_free": "8007354567",
            "shared_cost": "8447034567",
            "voip": "5612345678",
            "personal_number": "7015115678",
            "pager": "7640123456",
            "uan": "5512345678",
            "fixed_line": "1534456789",
            "mobile": "7797712345"
         },
         "formats": [
            {
               "pattern": "(7\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "7(?:[1-57-9]|62)",
                  "7(?:[1-57-9]|624)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2|5[56]|7[06]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[02-9]1|1)|3|9[018]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{5})(\\d{4,5})",
               "leading_digits_patterns": [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{4})",
               "leading_digits_patterns": [
                  "800",
                  "8001",
                  "80011",
                  "800111",
                  "8001111"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(845)(46)(4\\d)",
               "leading_digits_patterns": [
                  "845",
                  "8454",
                  "84546",
                  "845464"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(8\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8(?:4[2-5]|7[0-3])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{6})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "JM": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "876",
         "national_number_pattern": "(?:[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}"
            },
            "mobile": {
               "pattern": "876(?:2[14-9]\\d|[348]\\d{2}|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "8765230123",
            "mobile": "8762101234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "JO": {
         "phone_code": "962",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "80\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "85\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "70\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "74(?:66|77)\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "8(?:10|8\\d)\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "7(?:55[0-49]|7[025-9]\\d|8[0-25-9]\\d|9[0-25-9]\\d)\\d{5}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "shared_cost": "85012345",
            "personal_number": "700123456",
            "pager": "746612345",
            "uan": "88101234",
            "fixed_line": "62001234",
            "mobile": "790123456"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2356]|87"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(7)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "7[457-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "70"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5,6})",
               "leading_digits_patterns": [
                  "8[0158]|9"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "JP": {
         "phone_code": "81",
         "idd_prefix": "010",
         "national_number_pattern": "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "990\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})"
            },
            "voip": {
               "pattern": "50[1-9]\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "60\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "20\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "570\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "[7-9]0[1-9]\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "990123456",
            "toll_free": "120123456",
            "voip": "5012345678",
            "personal_number": "601234567",
            "pager": "2012345678",
            "uan": "570123456",
            "fixed_line": "312345678",
            "mobile": "9012345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "(?:12|57|99)0"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[2579]0|80[1-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{4})(\\d)(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
                  "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))",
                  "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
                  "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))",
                  "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
                  "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)",
                  "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])",
                  "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "2(?:[34]7|[56]9|74|9[14-79])|82|993"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "3|4(?:2[09]|7[01])|6[1-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2479][1-9]"
               ],
               "format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17
         ]
      },
      "KE": {
         "phone_code": "254",
         "idd_prefix": "000",
         "national_number_pattern": "(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "005|0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900[02-9]\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800[24-8]\\d{5,6}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "20\\d{6,7}|4(?:0\\d{6,7}|[136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|2\\d{7}|6\\d{6,7})",
               "possible_lengths": [
                  7,
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "7\\d{8}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900223456",
            "toll_free": "800223456",
            "fixed_line": "202012345",
            "mobile": "712123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{5,7})",
               "leading_digits_patterns": [
                  "[24-6]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10
         ]
      },
      "KG": {
         "phone_code": "996",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "800\\d{6,7}"
            },
            "fixed_line": {
               "pattern": "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "800123456",
            "fixed_line": "312123456",
            "mobile": "700123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[25-79]|31[25]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{5})",
               "leading_digits_patterns": [
                  "3(?:1[36]|[2-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d)(\\d{3})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9,
            10
         ]
      },
      "KH": {
         "phone_code": "855",
         "idd_prefix": "00[14-9]",
         "national_number_pattern": "1\\d{9}|[1-9]\\d{7,8}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "1900(?:1\\d|2[09])\\d{4}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "1800(?:1\\d|2[019])\\d{4}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}",
               "possible_lengths": [
                  8,
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "fixed_line": "23756789",
            "mobile": "91234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "1\\d[1-9]|[2-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[89]00)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[89]0",
                  "1[89]00"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "KI": {
         "phone_code": "686",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
         "national_prefix_for_parsing": "0",
         "types": {
            "voip": {
               "pattern": "30(?:0[01]\\d{2}|12(?:11|20))\\d{2}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}|(?:65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d{2}|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500)))\\d{3}"
            },
            "mobile": {
               "pattern": "(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "voip": "30010000",
            "fixed_line": "31234",
            "mobile": "72001234"
         },
         "formats": [],
         "possible_lengths": [
            5,
            8
         ]
      },
      "KM": {
         "phone_code": "269",
         "idd_prefix": "00",
         "national_number_pattern": "[3478]\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "8\\d{6}"
            },
            "fixed_line": {
               "pattern": "7[4-7]\\d{5}"
            },
            "mobile": {
               "pattern": "[34]\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "8001234",
            "fixed_line": "7712345",
            "mobile": "3212345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "KN": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "869",
         "national_number_pattern": "(?:[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}"
            },
            "mobile": {
               "pattern": "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "8692361234",
            "mobile": "8697652917"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "KP": {
         "phone_code": "850",
         "idd_prefix": "00|99",
         "national_number_pattern": "(?:(?:19\\d|2)\\d|85)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "2\\d{7}|85\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "19[123]\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "fixed_line": "21234567",
            "mobile": "1921234567"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            10
         ]
      },
      "KR": {
         "phone_code": "82",
         "idd_prefix": "00(?:[1259]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
         "national_number_pattern": "(?:00(?:0\\d|[1-9]\\d{1,4})|(?:[13-6]\\d|2)\\d?|70\\d|80)\\d{7}|1\\d{7}|[3-6]\\d{4,5}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0(8[1-46-8]|85\\d{2})?",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "60[2-9]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}",
               "possible_lengths": [
                  9,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "voip": {
               "pattern": "70\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "50\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "pager": {
               "pattern": "15\\d{7,8}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "uan": {
               "pattern": "1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "2[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})",
               "possible_lengths": [
                  5,
                  6,
                  8,
                  9,
                  10
               ]
            },
            "mobile": {
               "pattern": "1[0-26-9]\\d{7,8}",
               "possible_lengths": [
                  9,
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "602345678",
            "toll_free": "801234567",
            "voip": "7012345678",
            "personal_number": "5012345678",
            "pager": "1523456789",
            "uan": "15441234",
            "fixed_line": "22123456",
            "mobile": "1000000000"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3,4})",
               "leading_digits_patterns": [
                  "(?:3[1-3]|[46][1-4]|5[1-5])1"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:5[246-9]|6[046-8]|8[03579])",
                  "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{5})",
               "leading_digits_patterns": [
                  "1[016-9]1",
                  "1[016-9]11",
                  "1[016-9]114"
               ],
               "format": "$1"
            },
            {
               "pattern": "(\\d)(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "2[1-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "60[2-9]|80"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[57]0"
               ],
               "format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            5,
            6,
            8,
            9,
            10,
            11,
            12,
            13,
            14
         ]
      },
      "KW": {
         "phone_code": "965",
         "idd_prefix": "00",
         "national_number_pattern": "(?:18|[2569]\\d\\d)\\d{5}",
         "types": {
            "toll_free": {
               "pattern": "18\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|6[56]\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:0[09]\\d|11[01]|22\\d|4[01479]\\d|55\\d|6[0679]\\d|7(?:02|[1-9]\\d)|8[057-9]\\d|9\\d{2}))\\d{4}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "toll_free": "1801234",
            "fixed_line": "22345678",
            "mobile": "50012345"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[0-24-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "244|5(?:[015]|6[56])"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "KY": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "345",
         "national_number_pattern": "(?:345|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}|345976\\d{4}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "pager": {
               "pattern": "345849\\d{4}"
            },
            "fixed_line": {
               "pattern": "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}"
            },
            "mobile": {
               "pattern": "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "pager": "3458491234",
            "fixed_line": "3452221234",
            "mobile": "3453231234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "KZ": {
         "phone_code": "7",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "(?:33622|(?:7\\d|80)\\d{3})\\d{5}",
         "national_prefix": "8",
         "types": {
            "premium_rate": {
               "pattern": "809\\d{7}"
            },
            "toll_free": {
               "pattern": "800\\d{7}"
            },
            "voip": {
               "pattern": "751\\d{7}"
            },
            "personal_number": {
               "pattern": "808\\d{7}"
            },
            "fixed_line": {
               "pattern": "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}"
            },
            "mobile": {
               "pattern": "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "8091234567",
            "toll_free": "8001234567",
            "voip": "7511234567",
            "personal_number": "8081234567",
            "fixed_line": "7123456789",
            "mobile": "7710009998"
         },
         "formats": [
            {
               "pattern": "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[3489]"
               ],
               "format": "$1 $2-$3-$4"
            },
            {
               "pattern": "(7\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "LA": {
         "phone_code": "856",
         "idd_prefix": "00",
         "national_number_pattern": "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "20(?:2[2389]|5[24-689]|7[6-8]|9[1-35-9])\\d{6}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "fixed_line": "21212862",
            "mobile": "2023123456"
         },
         "formats": [
            {
               "pattern": "(20)(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "20"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([2-8]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2[13]|3[14]|[4-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(30)(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "30"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "LB": {
         "phone_code": "961",
         "idd_prefix": "00",
         "national_number_pattern": "[7-9]\\d{7}|[13-9]\\d{6}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "9[01]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "80\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "shared_cost": "80123456",
            "fixed_line": "1123456",
            "mobile": "71123456"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([7-9]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "LC": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "758",
         "national_number_pattern": "(?:[58]\\d\\d|758|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}"
            },
            "mobile": {
               "pattern": "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "7584305678",
            "mobile": "7582845678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "LI": {
         "phone_code": "423",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}",
         "national_prefix": "0",
         "national_prefix_for_parsing": "0|10(?:01|20|66)",
         "types": {
            "premium_rate": {
               "pattern": "90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "80(?:02[28]|9\\d{2})\\d{2}",
               "possible_lengths": [
                  7
               ]
            },
            "uan": {
               "pattern": "870(?:28|87)\\d{2}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002222",
            "toll_free": "8002222",
            "uan": "8702812",
            "fixed_line": "2345678",
            "mobile": "660234567"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[237-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "6[56]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(69)(7\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "697"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            9
         ]
      },
      "LK": {
         "phone_code": "94",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[1-7]\\d|[89]1)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "1(?:1[2-57]\\d{6}|973\\d{5})|(?:2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7]|[89]1)[2-57]\\d{6}"
            },
            "mobile": {
               "pattern": "7[0125-8]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "112345678",
            "mobile": "712345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[1-689]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "LR": {
         "phone_code": "231",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[45])\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "332(?:02|[2-5]\\d)\\d{4}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:2\\d{3}|33333)\\d{4}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:20\\d{2}|330\\d|4[67]|5(?:55)?\\d|77\\d{2}|88\\d{2})\\d{5}",
               "possible_lengths": [
                  7,
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "332021234",
            "fixed_line": "21234567",
            "mobile": "770123456"
         },
         "formats": [
            {
               "pattern": "(2\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([4-5])(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[45]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[23578]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9
         ]
      },
      "LS": {
         "phone_code": "266",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[256]\\d\\d|800)\\d{5}",
         "types": {
            "toll_free": {
               "pattern": "800[256]\\d{4}"
            },
            "fixed_line": {
               "pattern": "2\\d{7}"
            },
            "mobile": {
               "pattern": "[56]\\d{7}"
            }
         },
         "examples": {
            "toll_free": "80021234",
            "fixed_line": "22123456",
            "mobile": "50123456"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "LT": {
         "phone_code": "370",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[3469]\\d|52|[78]0)\\d{6}",
         "national_prefix": "8",
         "national_prefix_for_parsing": "[08]",
         "national_prefix_formatting_rule": "(8-$1)",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "9(?:0[0239]|10)\\d{5}"
            },
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "shared_cost": {
               "pattern": "808\\d{5}"
            },
            "personal_number": {
               "pattern": "700\\d{5}"
            },
            "uan": {
               "pattern": "70[67]\\d{5}"
            },
            "fixed_line": {
               "pattern": "(?:3[1478]|4[124-6]|52)\\d{6}"
            },
            "mobile": {
               "pattern": "6\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "shared_cost": "80812345",
            "personal_number": "70012345",
            "uan": "70712345",
            "fixed_line": "31234567",
            "mobile": "61234567"
         },
         "formats": [
            {
               "pattern": "([34]\\d)(\\d{6})",
               "leading_digits_patterns": [
                  "37|4(?:1|5[45]|6[2-4])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([3-6]\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "3[148]|4(?:[24]|6[09])|528|6"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([7-9]\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[7-9]"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(5)(2\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "52[0-79]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "LU": {
         "phone_code": "352",
         "idd_prefix": "00",
         "national_number_pattern": "[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}",
         "national_prefix_for_parsing": "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",
         "types": {
            "premium_rate": {
               "pattern": "90[015]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "801\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "20(?:1\\d{5}|[2-689]\\d{1,7})",
               "possible_lengths": [
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "2[2-9]\\d{2,9}|(?:3(?:[0-46-9]\\d|5[013-9])|[457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}"
            },
            "mobile": {
               "pattern": "6(?:[269][18]|5[158]|7[189]|81)\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "shared_cost": "80112345",
            "voip": "20201234",
            "fixed_line": "27123456",
            "mobile": "628123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "20"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
               "leading_digits_patterns": [
                  "2(?:[0367]|4[3-8])"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "20"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
               "leading_digits_patterns": [
                  "2(?:[0367]|4[3-8])"
               ],
               "format": "$1 $2 $3 $4 $5"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})",
               "leading_digits_patterns": [
                  "2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "70|80[01]|90[015]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
         ]
      },
      "LV": {
         "phone_code": "371",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[268]\\d|90)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{6}"
            },
            "toll_free": {
               "pattern": "80\\d{6}"
            },
            "shared_cost": {
               "pattern": "81\\d{6}"
            },
            "fixed_line": {
               "pattern": "6\\d{7}"
            },
            "mobile": {
               "pattern": "2\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "shared_cost": "81123456",
            "fixed_line": "63123456",
            "mobile": "21234567"
         },
         "formats": [
            {
               "pattern": "([2689]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2689]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "LY": {
         "phone_code": "218",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2569]\\d|71)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}"
            },
            "mobile": {
               "pattern": "9[1-6]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "212345678",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "([25-79]\\d)(\\d{7})",
               "leading_digits_patterns": [
                  "[25-79]"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "MA": {
         "phone_code": "212",
         "idd_prefix": "00",
         "national_number_pattern": "[5-8]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "89\\d{7}"
            },
            "toll_free": {
               "pattern": "80\\d{7}"
            },
            "voip": {
               "pattern": "5924[01]\\d{4}"
            },
            "fixed_line": {
               "pattern": "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}"
            },
            "mobile": {
               "pattern": "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "891234567",
            "toll_free": "801234567",
            "voip": "592401234",
            "fixed_line": "520123456",
            "mobile": "650123456"
         },
         "formats": [
            {
               "pattern": "([5-7]\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "5(?:2[015-7]|3[0-4])|[67]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "([58]\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "5(?:2[2-489]|3[5-9]|92)|892",
                  "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(5\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "5(?:29|38)",
                  "5(?:29|38)[89]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "5(?:4[067]|5[03])"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(8[09])(\\d{7})",
               "leading_digits_patterns": [
                  "8(?:0|9[013-9])"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "MC": {
         "phone_code": "377",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "90\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "870\\d{5}|9[2-47-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "3\\d{7}|4(?:4\\d|5[1-9])\\d{5}|6\\d{8}"
            }
         },
         "examples": {
            "toll_free": "90123456",
            "fixed_line": "99123456",
            "mobile": "612345678"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[39]"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "4"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1 $2 $3 $4 $5"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "8"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "MD": {
         "phone_code": "373",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[235-7]\\d|[89]0)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90[056]\\d{5}"
            },
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "shared_cost": {
               "pattern": "808\\d{5}"
            },
            "voip": {
               "pattern": "3[08]\\d{6}"
            },
            "uan": {
               "pattern": "803\\d{5}"
            },
            "fixed_line": {
               "pattern": "(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}"
            },
            "mobile": {
               "pattern": "(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "shared_cost": "80812345",
            "voip": "30123456",
            "uan": "80312345",
            "fixed_line": "22212345",
            "mobile": "62112345"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "22|3"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([25-7]\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "2[13-9]|[5-7]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([89]\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "ME": {
         "phone_code": "382",
         "idd_prefix": "00",
         "national_number_pattern": "(?:20|[3-79]\\d|80\\d?)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "(?:9(?:4[1568]|5[178]))\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "80(?:[0-2578]|9\\d)\\d{5}"
            },
            "voip": {
               "pattern": "78[1-49]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "77[1-9]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "6(?:00\\d|3[024]\\d|6[0-25]\\d|[7-9]\\d{2})\\d{4}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "94515151",
            "toll_free": "80080002",
            "voip": "78108780",
            "uan": "77273012",
            "fixed_line": "30234567",
            "mobile": "67622901"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[2-57-9]|6[036-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "MF": {
         "phone_code": "590",
         "idd_prefix": "00",
         "national_number_pattern": "(?:590|69\\d)\\d{6}",
         "national_prefix": "0",
         "types": {
            "fixed_line": {
               "pattern": "590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}"
            },
            "mobile": {
               "pattern": "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "590271234",
            "mobile": "690001234"
         },
         "formats": [
            {
               "pattern": "([56]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "590|69[01]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "MG": {
         "phone_code": "261",
         "idd_prefix": "00",
         "national_number_pattern": "[23]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "voip": {
               "pattern": "22\\d{7}"
            },
            "fixed_line": {
               "pattern": "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}"
            },
            "mobile": {
               "pattern": "3[2-49]\\d{7}"
            }
         },
         "examples": {
            "voip": "221234567",
            "fixed_line": "202123456",
            "mobile": "321234567"
         },
         "formats": [
            {
               "pattern": "([23]\\d)(\\d{2})(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "[23]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "MH": {
         "phone_code": "692",
         "idd_prefix": "011",
         "national_number_pattern": "(?:(?:[256]\\d|45)\\d|329)\\d{4}",
         "national_prefix": "1",
         "types": {
            "voip": {
               "pattern": "635\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:247|528|625)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:235|329|45[56]|545)\\d{4}"
            }
         },
         "examples": {
            "voip": "6351234",
            "fixed_line": "2471234",
            "mobile": "2351234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "MK": {
         "phone_code": "389",
         "idd_prefix": "00",
         "national_number_pattern": "[2-578]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "5[02-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "shared_cost": {
               "pattern": "8(?:0[1-9]|[1-9]\\d)\\d{5}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}"
            },
            "mobile": {
               "pattern": "7(?:[0-25-8]\\d{2}|3[2-4]\\d|421|9[23]\\d)\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "50012345",
            "toll_free": "80012345",
            "shared_cost": "80123456",
            "fixed_line": "22012345",
            "mobile": "72345678"
         },
         "formats": [
            {
               "pattern": "(2)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([347]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[347]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([58]\\d{2})(\\d)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[58]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "ML": {
         "phone_code": "223",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[246-9]\\d|50)\\d{6}",
         "types": {
            "toll_free": {
               "pattern": "80\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:2(?:079|17\\d)|50\\d{2}|[679]\\d{3}|8[239]\\d{2})\\d{4}"
            }
         },
         "examples": {
            "toll_free": "80012345",
            "fixed_line": "20212345",
            "mobile": "65012345"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[24-9]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "MM": {
         "phone_code": "95",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "80080[01][1-9]\\d{3}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "(?:1(?:333|468)|2468)\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "1(?:2\\d{1,2}|[35]\\d|4(?:\\d|2[2-469]|39|6[25]|70)|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|2[246]\\d{4}|39\\d{4}|62\\d{4}|70\\d{4}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2(?:[25-8]|4(?:80)?)|3(?:2(?:02)?|[36]|4(?:70)?|56?)|[46][2-6]|5(?:[35]|4(?:70)?))\\d{4}|5(?:2(?:2(?:\\d{1,2})?|[35-8]|4(?:70)?)|3[2-68]|4(?:21?|4(?:70)?|[5-8])|5[23]|6[2-4]|7(?:[235-8]|4(?:80)?)|8(?:[25-7]|4(?:70)?)|9(?:[235-7]|4(?:70)?))\\d{4}|6(?:0[23]|1(?:2(?:0|4\\d)?|[356])|2[2-6]|3(?:[25-6]|4(?:70)?)|4(?:2(?:4\\d)?|[3-6])|5[2-4]|6[2-8]|7(?:[2367]|4(?:\\d|39|[67]0)|5\\d?|8[145]\\d)|8[245]|9(?:20?|4))\\d{4}|7(?:[04](?:[25-8]|4(?:70)?)|1(?:20?|[35-7]|4(?:70)?)|22|3[2-4]|5(?:[235-7]|4(?:70)?))\\d{4}|8(?:1(?:2\\d{1,2}|[35689]\\d|4(?:70)?\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3(?:2|4(?:70)?)\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3(?:[0-36]|4[069])\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|6(?:1\\d|9\\d{2}|\\d)|7(?:3|5[0-2]|[6-9]\\d)\\d|8(?:\\d|9\\d{2})|9(?:1\\d|[5-7]\\d{2}|[089]))\\d{5}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "8008001234",
            "voip": "13331234",
            "fixed_line": "1234567",
            "mobile": "92123456"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "1|2[245]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "251"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d)(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "16|2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[4-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[4-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{4,6})",
               "leading_digits_patterns": [
                  "9(?:2[0-4]|[35-9]|4[137-9])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9)([34]\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "9(?:3[0-36]|4[0-57-9])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "92[56]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(9)(\\d{3})(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "93"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10
         ]
      },
      "MN": {
         "phone_code": "976",
         "idd_prefix": "001",
         "national_number_pattern": "[12]\\d{8,9}|[1257-9]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "voip": {
               "pattern": "7[05-8]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}"
            },
            "mobile": {
               "pattern": "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "voip": "75123456",
            "fixed_line": "50123456",
            "mobile": "88123456"
         },
         "formats": [
            {
               "pattern": "([12]\\d)(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[12]1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([12]2\\d)(\\d{5,6})",
               "leading_digits_patterns": [
                  "[12]2[1-3]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([12]\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "[12](?:27|[3-5])",
                  "[12](?:27|[3-5]\\d)2"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[57-9]"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "([12]\\d{4})(\\d{4,5})",
               "leading_digits_patterns": [
                  "[12](?:27|[3-5])",
                  "[12](?:27|[3-5]\\d)[4-9]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "MO": {
         "phone_code": "853",
         "idd_prefix": "00",
         "national_number_pattern": "(?:28|[68]\\d)\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}"
            },
            "mobile": {
               "pattern": "6(?:[2356]\\d{2}|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "28212345",
            "mobile": "66123456"
         },
         "formats": [
            {
               "pattern": "([268]\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[268]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "MP": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "670",
         "national_number_pattern": "(?:[58]\\d\\d|(?:67|90)0)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "6702345678",
            "mobile": "6702345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "MQ": {
         "phone_code": "596",
         "idd_prefix": "00",
         "national_number_pattern": "(?:596|69\\d)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}"
            },
            "mobile": {
               "pattern": "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "596301234",
            "mobile": "696201234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "MR": {
         "phone_code": "222",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-4]\\d\\d|800)\\d{5}",
         "types": {
            "toll_free": {
               "pattern": "800\\d{5}"
            },
            "fixed_line": {
               "pattern": "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}"
            },
            "mobile": {
               "pattern": "[234][0-46-9]\\d{6}"
            }
         },
         "examples": {
            "toll_free": "80012345",
            "fixed_line": "35123456",
            "mobile": "22123456"
         },
         "formats": [
            {
               "pattern": "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2-48]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "MS": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "664",
         "national_number_pattern": "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "664491\\d{4}"
            },
            "mobile": {
               "pattern": "66449[2-6]\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "6644912345",
            "mobile": "6644923456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "MT": {
         "phone_code": "356",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}"
            },
            "toll_free": {
               "pattern": "800[3467]\\d{4}"
            },
            "voip": {
               "pattern": "3550\\d{4}"
            },
            "pager": {
               "pattern": "7117\\d{4}"
            },
            "uan": {
               "pattern": "501\\d{5}"
            },
            "fixed_line": {
               "pattern": "2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d{2})\\d{4}"
            },
            "mobile": {
               "pattern": "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "50037123",
            "toll_free": "80071234",
            "voip": "35501234",
            "pager": "71171234",
            "uan": "50112345",
            "fixed_line": "21001234",
            "mobile": "96961234"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "MU": {
         "phone_code": "230",
         "idd_prefix": "0(?:0|[2-7]0|33)",
         "default_idd_prefix": "020",
         "national_number_pattern": "(?:[2-468]|5\\d)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "30\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "80[012]\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "voip": {
               "pattern": "3(?:20|9\\d)\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}"
            },
            "mobile": {
               "pattern": "5(?:2[589]\\d|4(?:2[1-389]|[489]\\d|7[1-9])|7\\d{2}|8(?:[0-689]\\d|7[15-8])|9[0-8]\\d)\\d{4}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "3012345",
            "toll_free": "8001234",
            "voip": "3201234",
            "fixed_line": "54480123",
            "mobile": "52512345"
         },
         "formats": [
            {
               "pattern": "([2-46-9]\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-46-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(5\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "5"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "MV": {
         "phone_code": "960",
         "idd_prefix": "0(?:0|19)",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "4[05]0\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024568]|8[024689]))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:46[46]|7[2-9]\\d|9[14-9]\\d)\\d{4}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "uan": "4001234",
            "fixed_line": "6701234",
            "mobile": "7712345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[3467]|9(?:0[1-9]|[1-9])"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]00"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            10
         ]
      },
      "MW": {
         "phone_code": "265",
         "idd_prefix": "00",
         "national_number_pattern": "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "voip": {
               "pattern": "31\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1[2-9]|21\\d{2})\\d{5}"
            },
            "mobile": {
               "pattern": "(?:111|77\\d|88\\d|99\\d)\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "voip": "310123456",
            "fixed_line": "1234567",
            "mobile": "991234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[17-9]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "31"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            9
         ]
      },
      "MX": {
         "phone_code": "52",
         "idd_prefix": "0[09]",
         "national_number_pattern": "(?:1\\d|[2-9])\\d{9}",
         "national_prefix": "01",
         "national_prefix_for_parsing": "0[12]|04[45](\\d{10})",
         "national_prefix_transform_rule": "1$1",
         "national_prefix_formatting_rule": "01 $1",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "900\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "8(?:00|88)\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "shared_cost": {
               "pattern": "300\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "500\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-9]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-9]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})",
               "possible_lengths": [
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "shared_cost": "3001234567",
            "personal_number": "5001234567",
            "fixed_line": "2221234567",
            "mobile": "12221234567"
         },
         "formats": [
            {
               "pattern": "([358]\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "33|55|81"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1)([358]\\d)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:33|55|81)"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "044 $2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(1)(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "044 $2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            10,
            11
         ]
      },
      "MY": {
         "phone_code": "60",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1\\d\\d?|3\\d|[4-9])\\d{7}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "1600\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "1[378]00\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:3(?:2(?:0(?:11|2[0-8]|3[0-24-79]|[579]\\d|8[0-57-9])|1(?:0[6-9]|1[03-9]|[467]\\d|8[0-2]|9[13])|2(?:0[1-3]|2[2-4]|4[0-25-7]|6[0-8]|7[02-689]|8\\d|9[5-9])|3(?:0[0-3]|3[0-36]|8[0-35-9]|9[1-3])|6(?:0[0-5]|[139]\\d|8[15-8])|7(?:1\\d|2[0-7]|3[0-3]|42|7[0-356]|8[0-35-8])|8(?:00|4[78]|5[6-9])|93[58])|3(?:0(?:0[0-35-9]|10|5[01]|8[0-6]|9[39])|1(?:0[1-39]|10|2[02-469]|3[245]|4[0-3589]|6[0-35-9]|7[067]|8[0-57]|9[0-278])|2(?:1[3467]|2[45]|4[1-3]|5[0689]|6[04589]|7[0-3579]|8[0-489]|9[0-27])|3(?:1[7-9]|2[1-6]|4[1-689]|5[89]|6[1-3]|7\\d|8[125]|9[236])|6(?:[12]0|3[01]|5[0-256]|6[08]|8[45]))|4(?:0(?:09|[14]\\d|2[0-8]|3[12]|5[01]|65)|1(?:0[0-8]|31|4\\d|6[12])|2(?:17|5[0-35-9]|6[024-6]|7[0189]|8[057-9]|9\\d)|770|8(?:0[0-2]|1[0-3569]|2[01]))|5(?:0(?:2[0-2]|3[0-35-9])|1(?:0[1-3]|1[05]|2[0-6]|31|6[1-7]|9[1258])|270|48[0-5]|5(?:1\\d|2[0-6]|4[0-589]|6[125-9]|9[01])|6(?:1[1-4]|2[0-589]|3\\d|5[0-3])|7(?:21|40)|8(?:7[06-9]|8[025-9]|9[12]))|6(?:0(?:2[0-28]|3[24-9]|4[246-9]|5[57]|6[13-6]|7[358]|8[1247]|9[0-59])|1(?:[04][0-58]|15|2[02-8]|3[015-9]|5[016-8]|7[7-9]|8[14-9]|9[1-356])|2(?:[05]\\d|11|[46][1-3]|7[02-79]|8[015-7])|303|4(?:1[129]|2[01]|3[36]|6[0-2])|690|7(?:3\\d|89))|7(?:118|2(?:0[02]|6[01])|4(?:[59]\\d|8[01])|6(?:1[01]|2\\d|5[0-2]|6[0-69])|7(?:1[0-37-9]|[28]\\d|3[1-5]|7[0-3])|8(?:[04]\\d|3[129]|59|6[1-356]|7[02-79]|8[02-7]|90)|9(?:10|3[1-3]|4[016-9]|[56]\\d|7[12]|8\\d))|8(?:0(?:0[08]|11|2[0-7]|5[12]|6\\d|7[013-69]|8[0-24]|9[0-5])|100|21[0-36]|3(?:08|1\\d|2[0-589]|31)|408|5(?:2[0-35-79]|88)|6(?:0[0-259]|5[5-79]|6[01]|8[46-9]|9[019])|7(?:0[35-8]|2[3-7]|3\\d|4[0149]|5[0-2]|6[016-9]|7[5-9]|8[037]|90)|8(?:00|61|7[0-3]|8\\d|9[0-4])|9(?:1[1-3]|[2-5]\\d|6[1-4689]|8[89]|9[0-689]))|9(?:0(?:1[0-289]|2[15]|5[014-9]|7[04-68]|8[0-256])|1(?:0[0-3568]|3[0-49]|4[015]|7[0-59]|9[15])|2(?:0[0-25-7]|12|2[1-6]|3[1256]|7[14]|8\\d)|3[68]8|41[01]|5(?:14|2[01]|4[03-9]|6[5-79]|7[0-2569])))\\d|4(?:2(?:0[01]|1[07-9]|2[02-46-9]|38|4[0-28]|5[0-589]|6[0-47-9]|8[0-389]|9[0-38])\\d|3(?:0[5-9]|[12][034]|3[0-37]|47|5[168]|6[7-9]|7[0135-8]|8\\d|9[0-27-9])\\d|4(?:[02-9]\\d{2}|1(?:[02-9]\\d|10))|5(?:[07]\\d{2}|1[0-358]\\d|2[1246]\\d|3[06-9]\\d|4[0589]\\d|5[12457-9]\\d|6[0-689]\\d|8(?:[0-57-9]\\d|60)|9(?:[2-57-9]\\d|60))|6(?:0[79]|1[0-689]|2[0135-9]|[3-5]\\d|6[07-9]|7[23]|8[03-9]|99)\\d|7(?:0[0-59]\\d|1[04679]\\d|2(?:[02-9]\\d|10)|[37]\\d{2}|4(?:[0178]\\d|5[0-6])|5(?:[0-57-9]\\d|60)|6[024-689]\\d|8[0-79]\\d|9(?:[0479]\\d|3[01]))|8(?:1[0189]\\d|2[046-9]\\d|3[058]\\d|5[029]\\d|6(?:[0689]\\d|40)|8[14568]\\d|9[0-389]\\d)|9(?:0[1368]\\d|1[13-9]\\d|[27]\\d{2}|3(?:[0-368]\\d|7[0-3])|4[013-79]\\d|5[0-35689]\\d|6[0-46-9]\\d|8[0-24-9]\\d|97\\d))|5(?:2(?:0[13589]\\d|1[0-2]\\d|2[056]\\d|3(?:[067]\\d|2[01])|4[0-69]\\d|5[3-6]\\d|8[0-25-9]\\d|9[0-469]\\d)|3(?:[12][0-38]|3[0-37]|4[89]|5[01346-9]|[67]\\d|8[01589]|95)\\d|4(?:0[1346]\\d|1[02-35-9]\\d|2[1379]\\d|3[0-46-9]\\d|4[013689]\\d|[59]\\d{2}|6(?:[15-9]\\d|20)|7[036-9]\\d|8[015-8]\\d)|5(?:0[167]\\d|17\\d|2[025-9]\\d|3[035-7]\\d|4[0-35-9]\\d|8[13]\\d|9(?:[124-9]\\d|31))|6(?:0[89]\\d|1[02-46-8]\\d|2[0-69]\\d|3(?:[1-367]\\d|40)|4[0-689]\\d|5(?:[0-24-9]\\d|30)|6[1457-9]\\d|7\\d{2}|8[0-57-9]\\d|9[0-389]\\d)|7(?:1(?:[024679]\\d|80)|2[0-35-8]\\d|3[23]\\d|4[34]\\d|5[0-36-9]\\d|6[356-9]\\d|7\\d{2}|8(?:[23]\\d|[01]1)|9(?:[1-689]\\d|70))|8(?:0[145-9]\\d|1[0-2]\\d|2[09]\\d|3(?:[058]\\d|0[017])|4[016-9]\\d|5[02-9]\\d|7(?:10|2\\d)|8[013589]\\d|9[0-57-9]\\d)|9[23]0\\d)|6(?:2(?:2[1246-9]\\d|3[0-5]\\d|4[02]\\d|5[1-3]\\d|[68]\\d{2}|7(?:[04-8]\\d|10)|9[2-5]\\d)|3(?:1(?:[125-9]\\d|3[01])|3[0-7]\\d|5[0-478]\\d|79\\d|8[3-578]\\d|9[018]\\d)|4(?:1[015]|[2-689]\\d|7[1-79])\\d|5(?:09\\d|1(?:10|[2479]\\d)|2[1-579]\\d|3(?:[0-467]\\d|50)|4[0-24-9]\\d|5\\d{2}|60\\d)|6(?:0[13]\\d|1[0-57]\\d|2[03]\\d|3[0-478]\\d|4[0-8]\\d|5[013-689]\\d|6[0-467]\\d|[78]\\d{2}|9(?:[13-9]\\d|20))|7(?:01|2[06-9]|3[367]|5[7-9]|6\\d|7[0156]|8[12]|9[0-47-9])\\d|85[0-26]\\d|9(?:0[167]|10|[57]\\d|6[02-9]|8[013-9])\\d)|7(?:2(?:0[7-9]|1[016-9]|2[0-8]|[39]\\d|4[014]|5[0-79]|6[125-8]|7[1246-9]|8[37-9])\\d|3(?:0[0-5]|[35]\\d|40|5[0-478]|6[0-5]|8[0-26-8])\\d|4(?:0[07-9]|[1-35]\\d|6[7-9]|7[57]|8[1-68])\\d|5(?:0[04-9]|1[0-68]|2[0-378]|3[0-3]|5\\d|6[0-2]|7[018]|8[5-7]|9[05-9])\\d|6(?:5[0-24-9]|6[0-3568]|7[0457-9]|8[02-9]|9\\d)\\d|7(?:0[25-8]\\d|1(?:[01]\\d|20)|2[0-2]\\d|3[489]\\d|[457-9]\\d{2}|6(?:[0-8]\\d|90))|8(?:01[01]|10\\d|[289]\\d{2}|3(?:[028]\\d|10)|50\\d|6[0-357-9]\\d|7(?:[0235-9]\\d|[14]0))|9(?:0(?:[0246-8]\\d|10)|[1-4]\\d{2}|50\\d|6[014589]\\d|[7-9]0\\d))|8(?:2(?:2(?:[013-5]\\d|[28][0-8]|6[016]|7[0-589]|9[0-49])|3(?:[02][0-689]|1[1-59]|[3-7]\\d|8[0-389]|9[13])|4(?:0[1-3]|[1-8]\\d|9[1-359])|5(?:0[1-7]|[17]\\d|20|3[0-26-9]|4[1-9]|5[0-35]|8[0-689]|9[02367])|6(?:[147]\\d|2[0-25-9]|39|5[014-9]|6[1-9]|8[1-8]|9[089])|7(?:0[017-9]|1[1-356]|20|3[01457-9]|4[15]|5[0-25]|6[0-6]|70|8[0-2]|9[01378])|8(?:0[3-57-9]|[15]0|2[124-9]|3[01]|4[02-6]|6[02-578]|7\\d|8[25-8]|9[04-689]))|3(?:220|3(?:0[089]|10|2[0-7]|3[7-9]|4[0-48])|4(?:0[68]|1[0-478]|2[5-79]|3[024-9]|50|6\\d|7[0-57]|8[05]|96)|5(?:4[4578]|55|6[2-9]|70|8[459]|92))|4(?:2(?:[15]\\d|2[0-489]|3[124-9])|3(?:0[1-8]|[1-4]\\d|5[0-3]|6[1-7]|7[56]|8[0-4]|9[1-578])|4(?:05|80)|555|6(?:1[0-3]|20|3[1-4]|4[0-24-7]|5\\d|6[0-2]|71|8[0-47-9]|9[0-689])|7(02|1[79]|21|3[0-2468]|5[0-5]|6[0256]|7[0-8]|8[01589]|9[026-9])|8(?:0[1-9]|1[0-3568]|2[0138]|3[0-4]|4[046-9]|5[06]|6\\d|7[0-579]|80|9[0-8]))|5(?:2(?:0[0-26]|1\\d|2[0-5]|3[18]|4[0-2]|6[3-68]|70|8[025-9]|9[05-9])|3(?:10|2\\d|31|95)|4(?:0[1-7]|[1-4]\\d|5[02-6]|6[0-3]|7[0-245]|8[125]|9[1-6])|5(?:40|55)|6(?:0[1459]|1[0-8]|2[0-36-8]|3[0-35-8]|[45]\\d|6[0-8]|80)|7(?:1[07-9]|20|3[3-9]|4[02-4]|5[05689]|6[015-9]|7\\d|8[045]|9[0-6]))|6(?:2(?:01|3[12]|5[1-7]|60|8[1-6]|9[0-8])|3(?:0[0137]|[134]\\d|2[0-8]|[59][01]|60|[78]1)|4(?:2[2-4]|49|5[17]|6\\d|7[0-46-9]|8[0-689])|5(?:0[6-8]|55|8[0149]|90)|8(?:5\\d|[68]0)|9(?:5[12]|81))|7(?:2(?:0[189]|[12][1-9]|3[0-47]|50)|3(?:[01][1-9]|3\\d|4[0-245]|6[4-9]|7[237-9]|9[12])|4(?:[0-2]\\d|3[167-9]|[45][0-3]|6[0-8]|7[25-9]|8[0-6]|90)|5(?:0[1-9]|[89]\\d)|7(?:1[89]|[27]\\d|3[013-9]|4[0-8]|50|6[01568]|82)|8(?:[03][1-3]|1[0-28]|2[0-38]|48|5[0-4]|6[1-3]|7[124]|8[013-57-9]|9[07]))|8(?:2(?:0[13-7]|[1-9]\\d)|3(?:0[1-47-9]|[128]\\d|3[0-4]|4[1-9]|5[0-35-7]|6[0-46-9]|9[3-7])|4(?:0[1-58]|1[1-5]|[2-57-9]\\d|69)|5(?:1[1-35-9]|2\\d|3[2-8]|52)|6(?:0[2-9]|1[1-8]|[23]\\d|41|5[12367]|6[1-9]|7[14-9]|8[02-8]|9[05])|7(?:0[1-589]|[1-35-8]\\d|4[0-7]|9[0-46-9])|8(?:01|30|5[0-48]|6[13]|7\\d|8[013-689]|9[24-9])|9(?:0[2-4689]|1\\d|2[08]|3[18]|4[03]|59|6[0-36-9]|7[0-35-79]|8[1235]))|9(?:2(?:[057][1-9]|[1-3]\\d|4[0-8]|6[1-5]|8[015-9]|9[04-6])|300|4(?:01|36|6[1-6]|[89][12])|5(?:0[25689]|1\\d|2[0134]|3[1-8]|5[17]|6[0-35-9]|7[0-7]|91)|6(?:1[1-9]|2[23]|3[0-4]|6[03-9]|7[0-7])|7(?:0[1-68]|1[1-8]|2[25-9]|3[056]|4[4-9]|[5-8]\\d|9[0-46-9])|8(?:0[1-7]|[189]\\d|2[1-46]|4[1-689]|5[0-79]|6[1-9]|71)|9(?:0[1-3]|1\\d|2[0-35-7]|3[67]|4[12]|5[0-249]|6[5-9]|75|8[1-6])))|9(?:2(?:0[458]\\d|1[2-57]\\d|2[0-589]\\d|[39]\\d{2}|4(?:[02-9]\\d|10)|5(?:[024-6]\\d|[7-9]0)|6(?:[03-9]\\d|20)|7[0-26-9]\\d|8(?:[0-24-68]\\d|7[01]))|3(?:0[0-2689]\\d|1(?:[0235]\\d|1[0-2]|4[01])|2(?:0[01]|[1-57-9]\\d|6[0-2])|3(?:00|1[0-4]|2\\d)|4[05]\\d|5[0-3568]\\d|6(?:[1-357-9]\\d|60)|[78]0\\d)|4(?:0[24578]\\d|1[02-57-9]\\d|2\\d{2}|3(?:[0278]\\d|1[01]|60)|4[013579]\\d|5[0-8]\\d|6[0678]\\d|7[013-9]\\d|8[01569]\\d)|5(0(?:[589]\\d|7[01])|1\\d{2}|2[0159]\\d|3[14689]\\d|4[0-46-9]\\d|5[0-35-9]\\d|6[0156-8]\\d|7[0-35]\\d|8[0-7]\\d|9[0-3589]\\d)|6(?:0[269]\\d|[12]\\d{2}|3[0-57-9]\\d|44[0-2]|5[01379]\\d|6[02-9]\\d|7[69]\\d|8(?:[0-24-8]\\d|30)|9(?:[0-24-9]\\d|3[01]))|7(?:0[0136-8]|1[02-4]|2[156]|3[258]|[489]\\d|5[0-589]|6[024-9]|7[0-689])\\d|8(?:0(?:0[01]|1\\d)|1[3-9]\\d|[23]\\d{2}|4[0-24-689]\\d|5[0-689]\\d|6[02-9]\\d|7(?:[01]0|[2-4]\\d)|888)|9(?:00\\d|1[2-57-9]\\d|2(?:00|1[01]|[238]\\d)|3(?:[2-467]\\d|50)|4[4-9]\\d|5(?:[0-2457-9]\\d|60)|6[0156]\\d|7[04-9]\\d|8[01]\\d)))\\d{3}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])\\d|1(?:[1-5]\\d{2}|6(?:0[5-9]|[1-9]\\d))\\d|[23679][2-9]\\d{2}|4(?:[235-9]\\d{2}|400)|59\\d{3}|8(?:1[23]\\d|[236]\\d{2}|4(?:[06]\\d|7[0-4])|5[7-9]\\d|7[016-9]\\d|8(?:[01]\\d|[27][0-4])|9[0-8]\\d))\\d{4}",
               "possible_lengths": [
                  9,
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "1600123456",
            "toll_free": "1300123456",
            "voip": "1546012345",
            "fixed_line": "323856789",
            "mobile": "123456789"
         },
         "formats": [
            {
               "pattern": "([4-79])(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[4-79]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2 $3"
            },
            {
               "pattern": "(3)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "3"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2 $3"
            },
            {
               "pattern": "([18]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "1[02-46-9][1-9]|8"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2 $3"
            },
            {
               "pattern": "(1)([36-8]00)(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "1[36-8]0",
                  "1[36-8]00"
               ],
               "format": "$1-$2-$3-$4"
            },
            {
               "pattern": "(11)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "11"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2 $3"
            },
            {
               "pattern": "(15[49])(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "15[49]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1-$2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "MZ": {
         "phone_code": "258",
         "idd_prefix": "00",
         "national_number_pattern": "(?:2|8\\d)\\d{7}",
         "types": {
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "8[2-7]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "800123456",
            "fixed_line": "21123456",
            "mobile": "821234567"
         },
         "formats": [
            {
               "pattern": "([28]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "2|8[2-7]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "NA": {
         "phone_code": "264",
         "idd_prefix": "00",
         "national_number_pattern": "[68]\\d{7,8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "8701\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "8(?:3\\d{2}|86)\\d{5}"
            },
            "fixed_line": {
               "pattern": "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|6[89]|7[01]))\\d{4}"
            },
            "mobile": {
               "pattern": "(?:60|8[125])\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "870123456",
            "voip": "88612345",
            "fixed_line": "61221234",
            "mobile": "811234567"
         },
         "formats": [
            {
               "pattern": "(8\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "8[1-35]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(6\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(88)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "88"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(870)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "870"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "NC": {
         "phone_code": "687",
         "idd_prefix": "00",
         "national_number_pattern": "[2-57-9]\\d{5}",
         "types": {
            "premium_rate": {
               "pattern": "36\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "366711",
            "fixed_line": "201234",
            "mobile": "751234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[2-46-9]|5[0-4]"
               ],
               "format": "$1.$2.$3"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "NE": {
         "phone_code": "227",
         "idd_prefix": "00",
         "national_number_pattern": "[0289]\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "09\\d{6}"
            },
            "toll_free": {
               "pattern": "08\\d{6}"
            },
            "fixed_line": {
               "pattern": "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}"
            },
            "mobile": {
               "pattern": "(?:8[04589]|9\\d)\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "09123456",
            "toll_free": "08123456",
            "fixed_line": "20201234",
            "mobile": "93123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "09|[289]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(08)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "08"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "NF": {
         "phone_code": "672",
         "idd_prefix": "00",
         "national_number_pattern": "[13]\\d{5}",
         "types": {
            "fixed_line": {
               "pattern": "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}"
            },
            "mobile": {
               "pattern": "3[58]\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "106609",
            "mobile": "381234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d)(\\d{5})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "NG": {
         "phone_code": "234",
         "idd_prefix": "009",
         "national_number_pattern": "[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "800\\d{7,11}",
               "possible_lengths": [
                  10,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "uan": {
               "pattern": "700\\d{7,11}",
               "possible_lengths": [
                  10,
                  11,
                  12,
                  13,
                  14
               ]
            },
            "fixed_line": {
               "pattern": "[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}",
               "possible_lengths": [
                  7,
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}",
               "possible_lengths": [
                  8,
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "80017591759",
            "uan": "7001234567",
            "fixed_line": "18040123",
            "mobile": "8021234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[12]|9(?:0[3-9]|[1-9])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2,3})",
               "leading_digits_patterns": [
                  "[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "70|8[01]|90[235-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([78]00)(\\d{4})(\\d{4,5})",
               "leading_digits_patterns": [
                  "[78]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([78]00)(\\d{5})(\\d{5,6})",
               "leading_digits_patterns": [
                  "[78]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(78)(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "78"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            10,
            11,
            12,
            13,
            14
         ]
      },
      "NI": {
         "phone_code": "505",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1800|[25-8]\\d{3})\\d{4}",
         "types": {
            "toll_free": {
               "pattern": "1800\\d{4}"
            },
            "fixed_line": {
               "pattern": "2\\d{7}"
            },
            "mobile": {
               "pattern": "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|7[5-8]\\d|8\\d{2})\\d{5}"
            }
         },
         "examples": {
            "toll_free": "18001234",
            "fixed_line": "21234567",
            "mobile": "81234567"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "NL": {
         "phone_code": "31",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|(?:8\\d|9[01])\\d{5,8}|1\\d{4,5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90[069]\\d{4,7}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4,7}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            },
            "voip": {
               "pattern": "(?:6760|(?:85|91)\\d{2})\\d{5}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "66\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}",
               "possible_lengths": [
                  5,
                  6,
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d{2})\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "6[1-58]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "9061234",
            "toll_free": "8001234",
            "voip": "851234567",
            "pager": "662345678",
            "uan": "14020",
            "fixed_line": "101234567",
            "mobile": "612345678"
         },
         "formats": [
            {
               "pattern": "([1-57-9]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]|91"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([1-5]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(6)(\\d{8})",
               "leading_digits_patterns": [
                  "6[0-57-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(66)(\\d{7})",
               "leading_digits_patterns": [
                  "66"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(14)(\\d{3,4})",
               "leading_digits_patterns": [
                  "14"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "([89]0\\d)(\\d{4,7})",
               "leading_digits_patterns": [
                  "[89]0"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10
         ]
      },
      "NO": {
         "phone_code": "47",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0|[2-9]\\d{3})\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "82[09]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "80[01]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "810(?:0[0-6]|[2-8]\\d)\\d{3}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "85[0-5]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "880\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}"
            },
            "fixed_line": {
               "pattern": "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:4[015-8]|5[89]|9\\d)\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "82012345",
            "toll_free": "80012345",
            "shared_cost": "81021234",
            "voip": "85012345",
            "personal_number": "88012345",
            "uan": "01234",
            "fixed_line": "21234567",
            "mobile": "40612345"
         },
         "formats": [
            {
               "pattern": "([489]\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[489]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[235-7]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            5,
            8
         ]
      },
      "NP": {
         "phone_code": "977",
         "idd_prefix": "00",
         "national_number_pattern": "9\\d{9}|[1-9]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "fixed_line": "14567890",
            "mobile": "9841234567"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{7})",
               "leading_digits_patterns": [
                  "1[2-6]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "1[01]|[2-8]|9(?:[1-69]|7[15-9])"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(9\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "9(?:6[013]|7[245]|8)"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            8,
            10
         ]
      },
      "NR": {
         "phone_code": "674",
         "idd_prefix": "00",
         "national_number_pattern": "(?:444|55\\d|888)\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "(?:444|888)\\d{4}"
            },
            "mobile": {
               "pattern": "55[4-9]\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "4441234",
            "mobile": "5551234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "NU": {
         "phone_code": "683",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[47]|888\\d)\\d{3}",
         "types": {
            "fixed_line": {
               "pattern": "[47]\\d{3}",
               "possible_lengths": [
                  4
               ]
            },
            "mobile": {
               "pattern": "888[4-9]\\d{3}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "fixed_line": "7012",
            "mobile": "8884012"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "888"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            4,
            7
         ]
      },
      "NZ": {
         "phone_code": "64",
         "idd_prefix": "0(?:0|161)",
         "default_idd_prefix": "00",
         "national_number_pattern": "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{6,7}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "toll_free": {
               "pattern": "508\\d{6,7}|80\\d{6,8}"
            },
            "personal_number": {
               "pattern": "70\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "[28]6\\d{6,7}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "2(?:[028]\\d{7,8}|1\\d{6,8}|[79]\\d{7})"
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "personal_number": "701234567",
            "pager": "26123456",
            "fixed_line": "32345678",
            "mobile": "211234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "240|[346]|7[2-57-9]|9[1-9]"
               ],
               "format": "$1-$2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "21"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,5})",
               "leading_digits_patterns": [
                  "2(?:1[1-9]|[69]|7[0-35-9])|70|86"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2\\d)(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "2[028]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "90"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "2(?:10|74)|5|[89]0"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "OM": {
         "phone_code": "968",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[279]\\d{3}|500|8007\\d?)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "8007\\d{4,5}|500\\d{4}"
            },
            "fixed_line": {
               "pattern": "2[2-6]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80071234",
            "fixed_line": "23123456",
            "mobile": "92123456"
         },
         "formats": [
            {
               "pattern": "(2\\d)(\\d{6})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([79]\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[79]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([58]00)(\\d{4,6})",
               "leading_digits_patterns": [
                  "[58]00"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9
         ]
      },
      "PA": {
         "phone_code": "507",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[1-57-9]|6\\d)\\d{6}",
         "types": {
            "premium_rate": {
               "pattern": "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[02-9]\\d|1[0-5])\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "8601234",
            "toll_free": "8001234",
            "fixed_line": "2001234",
            "mobile": "61234567"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-57-9]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "PE": {
         "phone_code": "51",
         "idd_prefix": "19(?:1[124]|77|90)00",
         "ext": " Anexo ",
         "national_number_pattern": "(?:[14-8]|9\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "premium_rate": {
               "pattern": "805\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "801\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "80[24]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "9\\d{8}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "80512345",
            "toll_free": "80012345",
            "shared_cost": "80112345",
            "personal_number": "80212345",
            "fixed_line": "11234567",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "(1)(\\d{7})",
               "leading_digits_patterns": [
                  "1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([4-8]\\d)(\\d{6})",
               "leading_digits_patterns": [
                  "[4-7]|8[2-4]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(9\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "9"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "PF": {
         "phone_code": "689",
         "idd_prefix": "00",
         "national_number_pattern": "[48]\\d{7}|4\\d{5}",
         "types": {
            "fixed_line": {
               "pattern": "4(?:[09][45689]\\d|4)\\d{4}"
            },
            "mobile": {
               "pattern": "8[79]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "fixed_line": "40412345",
            "mobile": "87123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "4[09]|8[79]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "44"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            8
         ]
      },
      "PG": {
         "phone_code": "675",
         "idd_prefix": "140[1-3]|00",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:180|(?:(?:[2-59]|7\\d)\\d|64|85)\\d)\\d{4}",
         "types": {
            "toll_free": {
               "pattern": "180\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "voip": {
               "pattern": "2(?:0[0-47]|7[568])\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "7(?:[0-689]\\d|75)\\d{5}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "toll_free": "1801234",
            "voip": "2751234",
            "fixed_line": "3123456",
            "mobile": "70123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[13-689]|27"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "20|7"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "PH": {
         "phone_code": "63",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}",
         "national_prefix": "0",
         "types": {
            "toll_free": {
               "pattern": "1800\\d{7,9}",
               "possible_lengths": [
                  11,
                  12,
                  13
               ]
            },
            "fixed_line": {
               "pattern": "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})",
               "possible_lengths": [
                  6,
                  8,
                  9,
                  10
               ]
            },
            "mobile": {
               "pattern": "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[34-79]|89|9[4-9]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "180012345678",
            "fixed_line": "21234567",
            "mobile": "9051234567"
         },
         "formats": [
            {
               "pattern": "(2)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2)(\\d{5})",
               "leading_digits_patterns": [
                  "2"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{4,6})",
               "leading_digits_patterns": [
                  "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])",
                  "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{5})(\\d{4})",
               "leading_digits_patterns": [
                  "346|4(?:27|9[35])|883",
                  "3469|4(?:279|9(?:30|56))|8834"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "([3-8]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[3-8]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "81|9"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1800)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "180",
                  "1800"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1800)(\\d{1,2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "180",
                  "1800"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            6,
            8,
            9,
            10,
            11,
            12,
            13
         ]
      },
      "PK": {
         "phone_code": "92",
         "idd_prefix": "00",
         "national_number_pattern": "(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "122\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
               "possible_lengths": [
                  11,
                  12
               ]
            },
            "fixed_line": {
               "pattern": "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "mobile": {
               "pattern": "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "personal_number": "122044444",
            "uan": "21111825888",
            "fixed_line": "2123456789",
            "mobile": "3012345678"
         },
         "formats": [
            {
               "pattern": "([89]00)(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "[89]00"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "1"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{7,8})",
               "leading_digits_patterns": [
                  "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{6,7})",
               "leading_digits_patterns": [
                  "2[349]|45|54|60|72|8[2-5]|9[2-469]",
                  "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(58\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "58[126]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(3\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "3"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(111)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1",
                  "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11",
                  "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(111)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2[349]|45|54|60|72|8[2-5]|9[2-9]",
                  "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1",
                  "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11",
                  "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10,
            11,
            12
         ]
      },
      "PL": {
         "phone_code": "48",
         "idd_prefix": "00",
         "national_number_pattern": "[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?",
         "types": {
            "premium_rate": {
               "pattern": "70[01346-8]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "shared_cost": {
               "pattern": "801\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "39\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "64\\d{4,7}"
            },
            "uan": {
               "pattern": "804\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:\\d{7}|19\\d{3})",
               "possible_lengths": [
                  7,
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "701234567",
            "toll_free": "800123456",
            "shared_cost": "801234567",
            "voip": "391234567",
            "pager": "641234567",
            "uan": "804123456",
            "fixed_line": "123456789",
            "mobile": "512345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "11[68]|64"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{5})",
               "leading_digits_patterns": [
                  "19"
               ],
               "format": "$1"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2,3})",
               "leading_digits_patterns": [
                  "64"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "26|39|45|5[0137]|6[0469]|7[02389]|8[08]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "PM": {
         "phone_code": "508",
         "idd_prefix": "00",
         "national_number_pattern": "[45]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:4[1-3]|50)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:4[02-4]|5[05])\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "430123",
            "mobile": "551234"
         },
         "formats": [
            {
               "pattern": "([45]\\d)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[45]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "PR": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "787|939",
         "national_number_pattern": "(?:[589]\\d\\d|787)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:787|939)[2-9]\\d{6}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "fixed_line": "7872345678",
            "mobile": "7872345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "PS": {
         "phone_code": "970",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "1800\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "shared_cost": {
               "pattern": "1700\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "5[69]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "toll_free": "1800123456",
            "shared_cost": "1700123456",
            "fixed_line": "22234567",
            "mobile": "599123456"
         },
         "formats": [
            {
               "pattern": "([2489])(2\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[2489]2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(5[69]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "5[69]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[78]00)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[78]0",
                  "1[78]00"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "PT": {
         "phone_code": "351",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[26-9]\\d|30)\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}"
            },
            "toll_free": {
               "pattern": "80[02]\\d{6}"
            },
            "shared_cost": {
               "pattern": "80(?:8\\d|9[1579])\\d{5}"
            },
            "voip": {
               "pattern": "30\\d{7}"
            },
            "personal_number": {
               "pattern": "884[0-4689]\\d{5}"
            },
            "uan": {
               "pattern": "7(?:0(?:7\\d|8[17]))\\d{5}"
            },
            "fixed_line": {
               "pattern": "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}"
            },
            "mobile": {
               "pattern": "9(?:[1236]\\d{2}|480)\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "760123456",
            "toll_free": "800123456",
            "shared_cost": "808123456",
            "voip": "301234567",
            "personal_number": "884123456",
            "uan": "707123456",
            "fixed_line": "212345678",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "(2\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2[12]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([2-46-9]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2[3-9]|[346-9]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "PW": {
         "phone_code": "680",
         "idd_prefix": "01[12]",
         "national_number_pattern": "(?:[25-8]\\d\\d|345|488|900)\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:6[234689]0|77\\d|88[0-4])\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "2771234",
            "mobile": "6201234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "PY": {
         "phone_code": "595",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}",
         "national_prefix": "0",
         "types": {
            "voip": {
               "pattern": "8700[0-4]\\d{4}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "[2-9]0\\d{4,7}"
            },
            "fixed_line": {
               "pattern": "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",
               "possible_lengths": [
                  7,
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "voip": "870012345",
            "uan": "201234567",
            "fixed_line": "212345678",
            "mobile": "961456789"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3,6})",
               "leading_digits_patterns": [
                  "[2-9]0"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "9[1-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "870",
                  "8700"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4,5})",
               "leading_digits_patterns": [
                  "[2-8][1-9]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2-8][1-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "QA": {
         "phone_code": "974",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}",
         "types": {
            "toll_free": {
               "pattern": "800\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "pager": {
               "pattern": "2(?:[12]\\d|61)\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "4[04]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "[3567]\\d{7}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "toll_free": "8001234",
            "pager": "2123456",
            "fixed_line": "44123456",
            "mobile": "33123456"
         },
         "formats": [
            {
               "pattern": "([28]\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[28]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([3-7]\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[3-7]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "RE": {
         "phone_code": "262",
         "idd_prefix": "00",
         "leading_digits": "262|69|8",
         "national_number_pattern": "(?:26|[68]\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "89[1-37-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "80\\d{7}"
            },
            "shared_cost": {
               "pattern": "8(?:1[019]|2[0156]|84|90)\\d{6}"
            },
            "fixed_line": {
               "pattern": "262\\d{6}"
            },
            "mobile": {
               "pattern": "69(?:2\\d{2}|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "891123456",
            "toll_free": "801234567",
            "shared_cost": "810123456",
            "fixed_line": "262161234",
            "mobile": "692123456"
         },
         "formats": [
            {
               "pattern": "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[268]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "RO": {
         "phone_code": "40",
         "idd_prefix": "00",
         "ext": " int ",
         "national_number_pattern": "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90[036]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "shared_cost": {
               "pattern": "801\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "37\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3(?:1\\d{4}(?:\\d{3})?|[3-6]\\d{7})"
            },
            "mobile": {
               "pattern": "7(?:[02-7]\\d{2}|1(?:[01]\\d|20)|8[03-8]\\d|99\\d)\\d{5}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "801123456",
            "uan": "372123456",
            "fixed_line": "211234567",
            "mobile": "712034567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[23]1"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[23]1"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[23][3-7]|[7-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "2[3-6]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6,
            9
         ]
      },
      "RS": {
         "phone_code": "381",
         "idd_prefix": "00",
         "national_number_pattern": "[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "(?:90[0169]|78\\d)\\d{3,7}"
            },
            "toll_free": {
               "pattern": "800\\d{3,9}"
            },
            "uan": {
               "pattern": "7[06]\\d{4,10}"
            },
            "fixed_line": {
               "pattern": "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
               ]
            },
            "mobile": {
               "pattern": "6(?:[0-689]|7\\d)\\d{6,7}",
               "possible_lengths": [
                  8,
                  9,
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "90012345",
            "toll_free": "80012345",
            "uan": "700123456",
            "fixed_line": "10234567",
            "mobile": "601234567"
         },
         "formats": [
            {
               "pattern": "([23]\\d{2})(\\d{4,9})",
               "leading_digits_patterns": [
                  "(?:2[389]|39)0"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([1-3]\\d)(\\d{5,10})",
               "leading_digits_patterns": [
                  "1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(6\\d)(\\d{6,8})",
               "leading_digits_patterns": [
                  "6"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([89]\\d{2})(\\d{3,9})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(7[26])(\\d{4,9})",
               "leading_digits_patterns": [
                  "7[26]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(7[08]\\d)(\\d{4,9})",
               "leading_digits_patterns": [
                  "7[08]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10,
            11,
            12
         ]
      },
      "RU": {
         "phone_code": "7",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "[347-9]\\d{9}",
         "national_prefix": "8",
         "national_prefix_formatting_rule": "8 ($1)",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "80[39]\\d{7}"
            },
            "toll_free": {
               "pattern": "80[04]\\d{7}"
            },
            "personal_number": {
               "pattern": "808\\d{7}"
            },
            "fixed_line": {
               "pattern": "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}"
            },
            "mobile": {
               "pattern": "9\\d{9}"
            }
         },
         "examples": {
            "premium_rate": "8091234567",
            "toll_free": "8001234567",
            "personal_number": "8081234567",
            "fixed_line": "3011234567",
            "mobile": "9123456789"
         },
         "formats": [
            {
               "pattern": "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[3489]"
               ],
               "format": "$1 $2-$3-$4"
            },
            {
               "pattern": "(7\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "RW": {
         "phone_code": "250",
         "idd_prefix": "00",
         "national_number_pattern": "(?:06|[27]\\d\\d|[89]00)\\d{6}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "2[258]\\d{7}|06\\d{6}"
            },
            "mobile": {
               "pattern": "7[238]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "fixed_line": "250123456",
            "mobile": "720123456"
         },
         "formats": [
            {
               "pattern": "(2\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([7-9]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[7-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "0"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "SA": {
         "phone_code": "966",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[15]|8\\d)\\d|92)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "shared_cost": {
               "pattern": "92[05]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:5(?:[013-689]\\d|7[0-36-8])|811\\d)\\d{6}"
            }
         },
         "examples": {
            "toll_free": "8001234567",
            "shared_cost": "920012345",
            "fixed_line": "112345678",
            "mobile": "512345678"
         },
         "formats": [
            {
               "pattern": "(1\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1[1-467]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(5\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "5"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(92\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "92"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(811)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "811"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9,
            10
         ]
      },
      "SB": {
         "phone_code": "677",
         "idd_prefix": "0[01]",
         "national_number_pattern": "(?:[1-6]|[7-9]\\d\\d)\\d{4}",
         "types": {
            "toll_free": {
               "pattern": "1[38]\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "voip": {
               "pattern": "5[12]\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "fixed_line": {
               "pattern": "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}"
            }
         },
         "examples": {
            "toll_free": "18123",
            "voip": "51123",
            "fixed_line": "40123",
            "mobile": "7421234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "[7-9]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            7
         ]
      },
      "SC": {
         "phone_code": "248",
         "idd_prefix": "0(?:[02]|10?)",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}",
         "types": {
            "toll_free": {
               "pattern": "8000\\d{3}"
            },
            "voip": {
               "pattern": "(?:64\\d|971)\\d{4}"
            },
            "fixed_line": {
               "pattern": "4[2-46]\\d{5}"
            },
            "mobile": {
               "pattern": "2[5-8]\\d{5}"
            }
         },
         "examples": {
            "toll_free": "8000000",
            "voip": "6412345",
            "fixed_line": "4217123",
            "mobile": "2510123"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[246]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "SD": {
         "phone_code": "249",
         "idd_prefix": "00",
         "national_number_pattern": "[19]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "1(?:5\\d|8[3567])\\d{6}"
            },
            "mobile": {
               "pattern": "(?:1[0-2]|9[0-3569])\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "151231234",
            "mobile": "911231234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "SE": {
         "phone_code": "46",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|[27]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",
               "possible_lengths": [
                  7,
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "20\\d{4,7}",
               "possible_lengths": [
                  6,
                  7,
                  8,
                  9
               ]
            },
            "shared_cost": {
               "pattern": "77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",
               "possible_lengths": [
                  6,
                  9
               ]
            },
            "personal_number": {
               "pattern": "75[1-8]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "74[02-9]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
               "possible_lengths": [
                  7,
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "7[02369]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "20123456",
            "shared_cost": "771234567",
            "personal_number": "751234567",
            "pager": "740123456",
            "fixed_line": "8123456",
            "mobile": "701234567"
         },
         "formats": [
            {
               "pattern": "([1-469]\\d)(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "[12][136]|3[356]|4[0246]|6[03]|90[1-9]"
               ],
               "format": "$1-$2 $3",
               "international_format": "$1 $2 $3"
            },
            {
               "pattern": "(9[034]\\d)(\\d{4})",
               "leading_digits_patterns": [
                  "9(?:00|39|44)"
               ],
               "format": "$1-$2",
               "international_format": "$1 $2"
            },
            {
               "pattern": "(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1-$2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"
               ],
               "format": "$1-$2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
               ],
               "format": "$1-$2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2,3})(\\d{2})",
               "leading_digits_patterns": [
                  "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
               ],
               "format": "$1-$2 $3",
               "international_format": "$1 $2 $3"
            },
            {
               "pattern": "(7\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1-$2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(77)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "77"
               ],
               "format": "$1-$2$3",
               "international_format": "$1 $2 $3"
            },
            {
               "pattern": "(20)(\\d{2,3})(\\d{2})",
               "leading_digits_patterns": [
                  "20"
               ],
               "format": "$1-$2 $3",
               "international_format": "$1 $2 $3"
            },
            {
               "pattern": "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "9[034]"
               ],
               "format": "$1-$2 $3 $4",
               "international_format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "25[245]|67[3-6]"
               ],
               "format": "$1-$2 $3 $4 $5",
               "international_format": "$1 $2 $3 $4 $5"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10
         ]
      },
      "SG": {
         "phone_code": "65",
         "idd_prefix": "0[0-3]\\d",
         "national_number_pattern": "(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "1900\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "toll_free": {
               "pattern": "1?800\\d{7}",
               "possible_lengths": [
                  10,
                  11
               ]
            },
            "voip": {
               "pattern": "3[12]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "7000\\d{7}",
               "possible_lengths": [
                  11
               ]
            },
            "fixed_line": {
               "pattern": "6[1-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:8[1-8]|9[0-8])\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "19001234567",
            "toll_free": "18001234567",
            "voip": "31234567",
            "uan": "70001234567",
            "fixed_line": "61234567",
            "mobile": "81234567"
         },
         "formats": [
            {
               "pattern": "([3689]\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[369]|8[1-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(1[89]00)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1[89]0",
                  "1[89]00"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(7000)(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "700",
                  "7000"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(800)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            10,
            11
         ]
      },
      "SH": {
         "phone_code": "290",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[256]\\d|8)\\d{3}",
         "types": {
            "voip": {
               "pattern": "262\\d{2}",
               "possible_lengths": [
                  5
               ]
            },
            "fixed_line": {
               "pattern": "2(?:[0-57-9]\\d|6[4-9])\\d{2}"
            },
            "mobile": {
               "pattern": "[56]\\d{4}",
               "possible_lengths": [
                  5
               ]
            }
         },
         "examples": {
            "voip": "26212",
            "fixed_line": "22158",
            "mobile": "51234"
         },
         "formats": [],
         "possible_lengths": [
            4,
            5
         ]
      },
      "SI": {
         "phone_code": "386",
         "idd_prefix": "00",
         "national_number_pattern": "[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{4,6}|89[1-3]\\d{2,5}"
            },
            "toll_free": {
               "pattern": "80\\d{4,6}",
               "possible_lengths": [
                  6,
                  7,
                  8
               ]
            },
            "voip": {
               "pattern": "(?:59|8[1-3])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:[37][01]\\d|4[0139]\\d|51\\d|6(?:[48]\\d|5[15-7]|9[69]))\\d{5}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "90123456",
            "toll_free": "80123456",
            "voip": "59012345",
            "fixed_line": "11234567",
            "mobile": "31234567"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[12]|[34][24-8]|5[2-8]|7[3-8]"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "([3-7]\\d)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[37][01]|4[0139]|51|6"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([89][09])(\\d{3,6})",
               "leading_digits_patterns": [
                  "[89][09]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([58]\\d{2})(\\d{5})",
               "leading_digits_patterns": [
                  "59|8[1-3]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8
         ]
      },
      "SJ": {
         "phone_code": "47",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "82[09]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "80[01]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "shared_cost": {
               "pattern": "810(?:0[0-6]|[2-8]\\d)\\d{3}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "85[0-5]\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "personal_number": {
               "pattern": "880\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "uan": {
               "pattern": "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}"
            },
            "fixed_line": {
               "pattern": "79\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:4[015-8]|5[89]|9\\d)\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "82012345",
            "toll_free": "80012345",
            "shared_cost": "81021234",
            "voip": "85012345",
            "personal_number": "88012345",
            "uan": "01234",
            "fixed_line": "79123456",
            "mobile": "41234567"
         },
         "formats": [
            {
               "pattern": "([489]\\d{2})(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[489]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[235-7]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            5,
            8
         ]
      },
      "SK": {
         "phone_code": "421",
         "idd_prefix": "00",
         "national_number_pattern": "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "9(?:[78]\\d{7}|00\\d{6})",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "800\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "shared_cost": {
               "pattern": "8[5-9]\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "6(?:02|5[0-4]|9[0-6])\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "pager": {
               "pattern": "9090\\d{3}",
               "possible_lengths": [
                  7
               ]
            },
            "uan": {
               "pattern": "96\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "2(?:1(?:6\\d{3,4}|7\\d{3})|[2-9]\\d{7})|[3-5][1-8](?:1(?:6\\d{2,3}|7\\d{3})|\\d{7})"
            },
            "mobile": {
               "pattern": "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "850123456",
            "voip": "690123456",
            "pager": "9090123",
            "uan": "961234567",
            "fixed_line": "221234567",
            "mobile": "912123456"
         },
         "formats": [
            {
               "pattern": "(2)(1[67])(\\d{3,4})",
               "leading_digits_patterns": [
                  "21[67]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([3-5]\\d)(\\d{2})(\\d{2,3})",
               "leading_digits_patterns": [
                  "[3-5]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(2)(\\d{3})(\\d{3})(\\d{2})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1/$2 $3 $4"
            },
            {
               "pattern": "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[3-5]"
               ],
               "format": "$1/$2 $3 $4"
            },
            {
               "pattern": "([689]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[689]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9090)(\\d{3})",
               "leading_digits_patterns": [
                  "909",
                  "9090"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            6,
            7,
            9
         ]
      },
      "SL": {
         "phone_code": "232",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-578]\\d|66|99)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "(0$1)",
         "types": {
            "fixed_line": {
               "pattern": "[235]2[2-4][2-9]\\d{4}"
            },
            "mobile": {
               "pattern": "(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "22221234",
            "mobile": "25123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{6})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "SM": {
         "phone_code": "378",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0549|[5-7]\\d)\\d{6}",
         "national_prefix_for_parsing": "([89]\\d{5})",
         "national_prefix_transform_rule": "0549$1",
         "types": {
            "premium_rate": {
               "pattern": "7[178]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "5[158]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "0549(?:8[0157-9]|9\\d)\\d{4}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "6[16]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "71123456",
            "voip": "58001110",
            "fixed_line": "0549886377",
            "mobile": "66661212"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[5-7]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(0549)(\\d{6})",
               "leading_digits_patterns": [
                  "054",
                  "0549"
               ],
               "format": "$1 $2",
               "international_format": "($1) $2"
            },
            {
               "pattern": "(\\d{6})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "0549 $1",
               "international_format": "(0549) $1"
            }
         ],
         "possible_lengths": [
            8,
            10
         ]
      },
      "SN": {
         "phone_code": "221",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[378]\\d{4}|93330)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "88[4689]\\d{6}"
            },
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "shared_cost": {
               "pattern": "81[02468]\\d{6}"
            },
            "voip": {
               "pattern": "39[01]\\d{6}|3392\\d{5}|93330\\d{4}"
            },
            "fixed_line": {
               "pattern": "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}"
            },
            "mobile": {
               "pattern": "7(?:[06-8]\\d|21|90)\\d{6}"
            }
         },
         "examples": {
            "premium_rate": "884123456",
            "toll_free": "800123456",
            "shared_cost": "810123456",
            "voip": "933301234",
            "fixed_line": "301012345",
            "mobile": "701234567"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[379]"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "SO": {
         "phone_code": "252",
         "idd_prefix": "00",
         "national_number_pattern": "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}",
         "national_prefix": "0",
         "types": {
            "fixed_line": {
               "pattern": "(?:1\\d{1,2}|2[0-79]\\d|3[0-46-8]?\\d|4[0-7]?\\d|59\\d|8[125])\\d{4}",
               "possible_lengths": [
                  6,
                  7
               ]
            },
            "mobile": {
               "pattern": "(?:15\\d|2(?:4\\d|8)|3[59]\\d{2}|4[89]\\d{2}|6[1-9]?\\d{2}|7(?:[1-8]\\d|9\\d{1,2})|8[08]\\d{2}|9(?:0[67]|[2-9])\\d)\\d{5}",
               "possible_lengths": [
                  7,
                  8,
                  9
               ]
            }
         },
         "examples": {
            "fixed_line": "4012345",
            "mobile": "71123456"
         },
         "formats": [
            {
               "pattern": "(\\d{6})",
               "leading_digits_patterns": [
                  "[134]"
               ],
               "format": "$1"
            },
            {
               "pattern": "(\\d)(\\d{6})",
               "leading_digits_patterns": [
                  "[13-5]|2[0-79]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d)(\\d{7})",
               "leading_digits_patterns": [
                  "24|[67]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "8[125]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{5,7})",
               "leading_digits_patterns": [
                  "15|28|6[1-35-9]|799|9[2-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "3[59]|4[89]|6[24-6]|79|8[08]|90"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9
         ]
      },
      "SR": {
         "phone_code": "597",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-5]|68|[78]\\d)\\d{5}",
         "types": {
            "voip": {
               "pattern": "56\\d{4}",
               "possible_lengths": [
                  6
               ]
            },
            "fixed_line": {
               "pattern": "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:7[124-7]|8[125-9])\\d{5}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "voip": "561234",
            "fixed_line": "211234",
            "mobile": "7412345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[2-4]|5[2-58]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "56"
               ],
               "format": "$1-$2-$3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[6-8]"
               ],
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            6,
            7
         ]
      },
      "SS": {
         "phone_code": "211",
         "idd_prefix": "00",
         "national_number_pattern": "[19]\\d{8}",
         "national_prefix": "0",
         "types": {
            "fixed_line": {
               "pattern": "18\\d{7}"
            },
            "mobile": {
               "pattern": "(?:12|9[1257])\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "181234567",
            "mobile": "977123456"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "ST": {
         "phone_code": "239",
         "idd_prefix": "00",
         "national_number_pattern": "(?:22|9\\d)\\d{5}",
         "types": {
            "fixed_line": {
               "pattern": "22\\d{5}"
            },
            "mobile": {
               "pattern": "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}"
            }
         },
         "examples": {
            "fixed_line": "2221234",
            "mobile": "9812345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7
         ]
      },
      "SV": {
         "phone_code": "503",
         "idd_prefix": "00",
         "national_number_pattern": "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{4}(?:\\d{4})?",
               "possible_lengths": [
                  7,
                  11
               ]
            },
            "toll_free": {
               "pattern": "800\\d{4}(?:\\d{4})?",
               "possible_lengths": [
                  7,
                  11
               ]
            },
            "fixed_line": {
               "pattern": "2[1-6]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "[67]\\d{7}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234",
            "toll_free": "8001234",
            "fixed_line": "21234567",
            "mobile": "70123456"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[267]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            11
         ]
      },
      "SX": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "721",
         "national_number_pattern": "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "7215(?:4[2-8]|8[239]|9[056])\\d{4}"
            },
            "mobile": {
               "pattern": "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002123456",
            "toll_free": "8002123456",
            "personal_number": "5002345678",
            "fixed_line": "7215425678",
            "mobile": "7215205678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "SY": {
         "phone_code": "963",
         "idd_prefix": "00",
         "national_number_pattern": "[1-39]\\d{8}|[1-5]\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "fixed_line": {
               "pattern": "(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}"
            },
            "mobile": {
               "pattern": "9(?:22|[3-589]\\d|6[024-9])\\d{6}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "fixed_line": "112345678",
            "mobile": "944567890"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[1-5]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "SZ": {
         "phone_code": "268",
         "idd_prefix": "00",
         "national_number_pattern": "(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "0800\\d{4}",
               "possible_lengths": [
                  8
               ]
            },
            "voip": {
               "pattern": "70\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "[23][2-5]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "7[6-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "900012345",
            "toll_free": "08001234",
            "voip": "70012345",
            "fixed_line": "22171234",
            "mobile": "76123456"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[0237]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{5})(\\d{4})",
               "leading_digits_patterns": [
                  "900"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "TA": {
         "phone_code": "290",
         "idd_prefix": "00",
         "national_number_pattern": "8\\d{3}",
         "types": {
            "fixed_line": {
               "pattern": "8\\d{3}"
            }
         },
         "examples": {
            "fixed_line": "8999"
         },
         "formats": [],
         "possible_lengths": [
            4
         ]
      },
      "TC": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "649",
         "national_number_pattern": "(?:[58]\\d\\d|649|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "voip": {
               "pattern": "64971[01]\\d{4}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "649(?:712|9(?:4\\d|50))\\d{4}"
            },
            "mobile": {
               "pattern": "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "voip": "6497101234",
            "personal_number": "5002345678",
            "fixed_line": "6497121234",
            "mobile": "6492311234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "TD": {
         "phone_code": "235",
         "idd_prefix": "00|16",
         "default_idd_prefix": "00",
         "national_number_pattern": "(?:22|[69]\\d|77)\\d{6}",
         "types": {
            "fixed_line": {
               "pattern": "22(?:[3789]0|5[0-5]|6[89])\\d{4}"
            },
            "mobile": {
               "pattern": "(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}"
            }
         },
         "examples": {
            "fixed_line": "22501234",
            "mobile": "63012345"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "TG": {
         "phone_code": "228",
         "idd_prefix": "00",
         "national_number_pattern": "[279]\\d{7}",
         "types": {
            "fixed_line": {
               "pattern": "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}"
            },
            "mobile": {
               "pattern": "(?:7[09]|9[0-36-9])\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "22212345",
            "mobile": "90112345"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[279]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "TH": {
         "phone_code": "66",
         "idd_prefix": "00[1-9]",
         "national_number_pattern": "(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "1900\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "1800\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "voip": {
               "pattern": "6[08]\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "(?:14|6[1-6]|[89]\\d)\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "voip": "601234567",
            "fixed_line": "21234567",
            "mobile": "812345678"
         },
         "formats": [
            {
               "pattern": "(2)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "2"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([13-9]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "14|[3-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[89]00)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "1[89]0",
                  "1[89]00"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9,
            10
         ]
      },
      "TJ": {
         "phone_code": "992",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "(?:[3-59]\\d|77|88)\\d{7}",
         "national_prefix": "8",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "fixed_line": {
               "pattern": "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}"
            },
            "mobile": {
               "pattern": "(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "372123456",
            "mobile": "917123456"
         },
         "formats": [
            {
               "pattern": "([349]\\d{2})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[34]7|91[78]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([457-9]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "4[148]|[578]|9(?:[0235-9]|1[59])"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(331700)(\\d)(\\d{2})",
               "leading_digits_patterns": [
                  "331",
                  "3317",
                  "33170",
                  "331700"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d)(\\d{4})",
               "leading_digits_patterns": [
                  "3[1-5]",
                  "3(?:[1245]|3(?:[02-9]|1[0-589]))"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "TK": {
         "phone_code": "690",
         "idd_prefix": "00",
         "national_number_pattern": "[2-47]\\d{3,6}",
         "types": {
            "fixed_line": {
               "pattern": "(?:2[2-4]|[34]\\d)\\d{2,5}"
            },
            "mobile": {
               "pattern": "7[2-4]\\d{2,5}"
            }
         },
         "examples": {
            "fixed_line": "3101",
            "mobile": "7290"
         },
         "formats": [],
         "possible_lengths": [
            4,
            5,
            6,
            7
         ]
      },
      "TL": {
         "phone_code": "670",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "80\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "personal_number": {
               "pattern": "70\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",
               "possible_lengths": [
                  7
               ]
            },
            "mobile": {
               "pattern": "7[3-8]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9012345",
            "toll_free": "8012345",
            "personal_number": "7012345",
            "fixed_line": "2112345",
            "mobile": "77212345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[2-489]|70"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "7[3-8]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "TM": {
         "phone_code": "993",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "[1-6]\\d{7}",
         "national_prefix": "8",
         "national_prefix_formatting_rule": "(8 $1)",
         "types": {
            "fixed_line": {
               "pattern": "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}"
            },
            "mobile": {
               "pattern": "6[1-9]\\d{6}"
            }
         },
         "examples": {
            "fixed_line": "12345678",
            "mobile": "66123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "12"
               ],
               "format": "$1 $2-$3-$4"
            },
            {
               "pattern": "(\\d{2})(\\d{6})",
               "leading_digits_patterns": [
                  "6"
               ],
               "national_prefix_formatting_rule": "8 $1",
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d)(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "13|[2-5]"
               ],
               "format": "$1 $2-$3-$4"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "TN": {
         "phone_code": "216",
         "idd_prefix": "00",
         "national_number_pattern": "[2-57-9]\\d{7}",
         "types": {
            "premium_rate": {
               "pattern": "88\\d{6}"
            },
            "toll_free": {
               "pattern": "8010\\d{4}"
            },
            "shared_cost": {
               "pattern": "8[12]10\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:3[0-2]\\d{3}|7\\d{4}|81200)\\d{3}"
            },
            "mobile": {
               "pattern": "(?:[259]\\d{3}|3(?:001|1(?:[1-35]\\d|40)|240|6[0-4]\\d|91\\d)|4[0-6]\\d{2})\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "88123456",
            "toll_free": "80101234",
            "shared_cost": "81101234",
            "fixed_line": "30010123",
            "mobile": "20123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8
         ]
      },
      "TO": {
         "phone_code": "676",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}",
         "types": {
            "toll_free": {
               "pattern": "0800\\d{3}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "(?:7[578]|8[46-9])\\d{5}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "toll_free": "0800222",
            "fixed_line": "20123",
            "mobile": "7715123"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})",
               "leading_digits_patterns": [
                  "[1-6]|7[0-4]|8[05]"
               ],
               "format": "$1-$2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7[5-9]|8[46-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "0"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            7
         ]
      },
      "TR": {
         "phone_code": "90",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}",
         "national_prefix": "0",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "(?:8[89]8|900)\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "toll_free": {
               "pattern": "800\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "592(?:21[12]|461)\\d{4}",
               "possible_lengths": [
                  10
               ]
            },
            "pager": {
               "pattern": "512\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "uan": {
               "pattern": "444\\d{4}|850\\d{7}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
               "possible_lengths": [
                  10
               ]
            },
            "mobile": {
               "pattern": "5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{2}|6161)\\d{5}",
               "possible_lengths": [
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "personal_number": "5922121234",
            "pager": "5123456789",
            "uan": "4441444",
            "fixed_line": "2123456789",
            "mobile": "5012345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[23]|4(?:[0-35-9]|4[0-35-9])"
               ],
               "national_prefix_formatting_rule": "(0$1)",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "5(?:[02-69]|1[06])"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "51|[89]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(444)(\\d{1})(\\d{3})",
               "leading_digits_patterns": [
                  "444"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            10
         ]
      },
      "TT": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "868",
         "national_number_pattern": "(?:[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}"
            },
            "mobile": {
               "pattern": "868(?:2(?:6[6-9]|[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "fixed_line": "8682211234",
            "mobile": "8682911234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "TV": {
         "phone_code": "688",
         "idd_prefix": "00",
         "national_number_pattern": "(?:2|7\\d\\d|90)\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "2[02-9]\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "(?:7[01]\\d|90)\\d{4}",
               "possible_lengths": [
                  6,
                  7
               ]
            }
         },
         "examples": {
            "fixed_line": "20123",
            "mobile": "901234"
         },
         "formats": [],
         "possible_lengths": [
            5,
            6,
            7
         ]
      },
      "TW": {
         "phone_code": "886",
         "idd_prefix": "0(?:0[25679]|19)",
         "ext": "#",
         "national_number_pattern": "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "20(?:2|[013-9]\\d{2})\\d{4}",
               "possible_lengths": [
                  7,
                  9
               ]
            },
            "toll_free": {
               "pattern": "80[0-79]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "70\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "99\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "50[0-46-9]\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:[235-8]\\d{3}|4\\d{2,3})|3[2-9]\\d{2}|4(?:[239]\\d|[78])\\d{2}|5[2-8]\\d{2}|6[235-79]\\d{2}|7[1-9]\\d{2}|8(?:2(?:3\\d|66)|[7-9]\\d{2}))\\d{4}",
               "possible_lengths": [
                  8,
                  9
               ]
            },
            "mobile": {
               "pattern": "9[0-8]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "premium_rate": "203123456",
            "toll_free": "800123456",
            "voip": "7012345678",
            "personal_number": "990123456",
            "uan": "500123456",
            "fixed_line": "221234567",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "(20)(\\d)(\\d{4})",
               "leading_digits_patterns": [
                  "202"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([258]0)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "20[013-9]|50[0-46-9]|80[0-79]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([2-8])(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "[25][2-8]|[346]|[78][1-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(9\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "9"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(70)(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "70"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10
         ]
      },
      "TZ": {
         "phone_code": "255",
         "idd_prefix": "00[056]",
         "national_number_pattern": "(?:[26-8]\\d|41|90)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90\\d{7}"
            },
            "toll_free": {
               "pattern": "80[08]\\d{6}"
            },
            "shared_cost": {
               "pattern": "8(?:40|6[01])\\d{6}"
            },
            "voip": {
               "pattern": "41\\d{7}"
            },
            "fixed_line": {
               "pattern": "2[2-8]\\d{7}"
            },
            "mobile": {
               "pattern": "(?:6[2-9]|7[13-9])\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "900123456",
            "toll_free": "800123456",
            "shared_cost": "840123456",
            "voip": "412345678",
            "fixed_line": "222345678",
            "mobile": "621234567"
         },
         "formats": [
            {
               "pattern": "([24]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[24]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([67]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[67]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([89]\\d{2})(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "UA": {
         "phone_code": "380",
         "idd_prefix": "00",
         "default_idd_prefix": "0~0",
         "national_number_pattern": "[3-9]\\d{8}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-49]\\d{5}"
            },
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "voip": {
               "pattern": "89[1-579]\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}"
            },
            "mobile": {
               "pattern": "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "900212345",
            "toll_free": "800123456",
            "voip": "891234567",
            "fixed_line": "311234567",
            "mobile": "391234567"
         },
         "formats": [
            {
               "pattern": "([3-9]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]",
                  "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([3-689]\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90",
                  "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([3-6]\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])",
                  "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "UG": {
         "phone_code": "256",
         "idd_prefix": "00[057]",
         "national_number_pattern": "(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "90[123]\\d{6}"
            },
            "toll_free": {
               "pattern": "800[123]\\d{5}"
            },
            "fixed_line": {
               "pattern": "20(?:[0147]\\d{3}|2(?:40|[5-9]\\d)\\d|3(?:0[0-4]|[2367]\\d)\\d|5[0-4]\\d{2}|6(?:00[0-2]|30[0-4]|[5-9]\\d{2})|8[0-2]\\d{2})\\d{3}|[34]\\d{8}"
            },
            "mobile": {
               "pattern": "7(?:[09][0-7]\\d|[1578]\\d{2}|2(?:[03]\\d|60)|30\\d|4[0-4]\\d)\\d{5}"
            }
         },
         "examples": {
            "premium_rate": "901123456",
            "toll_free": "800123456",
            "fixed_line": "312345678",
            "mobile": "712345678"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "20[0-8]|4(?:6[45]|[7-9])|[7-9]",
                  "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{7})",
               "leading_digits_patterns": [
                  "3|4(?:[1-5]|6[0-36-9])"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(2024)(\\d{5})",
               "leading_digits_patterns": [
                  "202",
                  "2024"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "US": {
         "phone_code": "1",
         "idd_prefix": "011",
         "national_number_pattern": "[2-9]\\d{9}",
         "national_prefix": "1",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "uan": {
               "pattern": "710[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "uan": "7102123456",
            "fixed_line": "2015550123",
            "mobile": "2015550123"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "UY": {
         "phone_code": "598",
         "idd_prefix": "0(?:1[3-9]\\d|0)",
         "default_idd_prefix": "00",
         "ext": " int. ",
         "national_number_pattern": "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
         "national_prefix": "0",
         "types": {
            "premium_rate": {
               "pattern": "90[0-8]\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "toll_free": {
               "pattern": "80[05]\\d{4}",
               "possible_lengths": [
                  7
               ]
            },
            "fixed_line": {
               "pattern": "2\\d{7}|4[2-7]\\d{6}",
               "possible_lengths": [
                  8
               ]
            },
            "mobile": {
               "pattern": "9[1-9]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "9001234",
            "toll_free": "8001234",
            "fixed_line": "21231234",
            "mobile": "94231234"
         },
         "formats": [
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "[24]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "9[1-9]"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[89]0"
               ],
               "national_prefix_formatting_rule": "0$1",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8
         ]
      },
      "UZ": {
         "phone_code": "998",
         "idd_prefix": "810",
         "default_idd_prefix": "8~10",
         "national_number_pattern": "[679]\\d{8}",
         "national_prefix": "8",
         "national_prefix_formatting_rule": "8 $1",
         "types": {
            "fixed_line": {
               "pattern": "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}"
            },
            "mobile": {
               "pattern": "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}"
            }
         },
         "examples": {
            "fixed_line": "669050123",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "([679]\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[679]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "VA": {
         "phone_code": "39",
         "idd_prefix": "00",
         "national_number_pattern": "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",
         "types": {
            "premium_rate": {
               "pattern": "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
               "possible_lengths": [
                  6,
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "80(?:0\\d{6}|3\\d{3})",
               "possible_lengths": [
                  6,
                  9
               ]
            },
            "shared_cost": {
               "pattern": "84(?:[08]\\d{6}|[17]\\d{3})",
               "possible_lengths": [
                  6,
                  9
               ]
            },
            "voip": {
               "pattern": "55\\d{8}",
               "possible_lengths": [
                  10
               ]
            },
            "personal_number": {
               "pattern": "1(?:78\\d|99)\\d{6}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "fixed_line": {
               "pattern": "06698\\d{1,6}"
            },
            "mobile": {
               "pattern": "3(?:1\\d{8}|[245-9]\\d{7,8}|3\\d{7,9})",
               "possible_lengths": [
                  9,
                  10,
                  11
               ]
            }
         },
         "examples": {
            "premium_rate": "899123456",
            "toll_free": "800123456",
            "shared_cost": "848123456",
            "voip": "5512345678",
            "personal_number": "1781234567",
            "fixed_line": "0669812345",
            "mobile": "3123456789"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "0[26]|55"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0[26])(\\d{4})(\\d{5})",
               "leading_digits_patterns": [
                  "0[26]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0[26])(\\d{4,6})",
               "leading_digits_patterns": [
                  "0[26]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(0\\d{2})(\\d{3,4})(\\d{4})",
               "leading_digits_patterns": [
                  "0[13-57-9][0159]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{3,6})",
               "leading_digits_patterns": [
                  "0[13-57-9][0159]|8(?:03|4[17]|9[245])",
                  "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(0\\d{3})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "0[13-57-9][2-46-8]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(0\\d{3})(\\d{2,6})",
               "leading_digits_patterns": [
                  "0[13-57-9][2-46-8]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[13]|8(?:00|4[08]|9[59])",
                  "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "894",
                  "894[5-9]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "3"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6,
            7,
            8,
            9,
            10,
            11
         ]
      },
      "VC": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "784",
         "national_number_pattern": "(?:[58]\\d\\d|784|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}"
            },
            "mobile": {
               "pattern": "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}"
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "fixed_line": "7842661234",
            "mobile": "7844301234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "VE": {
         "phone_code": "58",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{7}"
            },
            "toll_free": {
               "pattern": "800\\d{7}"
            },
            "fixed_line": {
               "pattern": "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}"
            },
            "mobile": {
               "pattern": "4(?:1[24-8]|2[46])\\d{7}"
            }
         },
         "examples": {
            "premium_rate": "9001234567",
            "toll_free": "8001234567",
            "fixed_line": "2121234567",
            "mobile": "4121234567"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{7})",
               "format": "$1-$2"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "VG": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "284",
         "national_number_pattern": "(?:284|[58]\\d\\d|900)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})"
            },
            "mobile": {
               "pattern": "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})"
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "fixed_line": "2842291234",
            "mobile": "2843001234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "VI": {
         "phone_code": "1",
         "idd_prefix": "011",
         "leading_digits": "340",
         "national_number_pattern": "(?:(?:34|90)0|[58]\\d\\d)\\d{7}",
         "national_prefix": "1",
         "types": {
            "premium_rate": {
               "pattern": "900[2-9]\\d{6}"
            },
            "toll_free": {
               "pattern": "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"
            },
            "personal_number": {
               "pattern": "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"
            },
            "fixed_line": {
               "pattern": "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}"
            },
            "mobile": {
               "pattern": ""
            }
         },
         "examples": {
            "premium_rate": "9002345678",
            "toll_free": "8002345678",
            "personal_number": "5002345678",
            "fixed_line": "3406421234",
            "mobile": "3406421234"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{4})",
               "format": "($1) $2-$3",
               "international_format": "$1-$2-$3"
            }
         ],
         "possible_lengths": [
            10
         ]
      },
      "VN": {
         "phone_code": "84",
         "idd_prefix": "00",
         "national_number_pattern": "[12]\\d{9}|(?:[19]\\d|8[0-35-9])\\d{7}|1\\d{7}|69\\d{5,6}|(?:[18]\\d\\d|799)\\d{4}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "national_prefix_is_optional_when_formatting": true,
         "types": {
            "premium_rate": {
               "pattern": "1900\\d{4,6}",
               "possible_lengths": [
                  8,
                  9,
                  10
               ]
            },
            "toll_free": {
               "pattern": "1800\\d{4,6}",
               "possible_lengths": [
                  8,
                  9,
                  10
               ]
            },
            "voip": {
               "pattern": "992\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "[17]99\\d{4}|69\\d{5,6}|80\\d{5}",
               "possible_lengths": [
                  7,
                  8
               ]
            },
            "fixed_line": {
               "pattern": "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}",
               "possible_lengths": [
                  9,
                  10
               ]
            },
            "mobile": {
               "pattern": "(?:1(?:2\\d|6[2-9]|8[68]|99)\\d|8(?:6[689]|8\\d|9[89])|9(?:[0-8]\\d|9[013-9]))\\d{6}",
               "possible_lengths": [
                  9,
                  10
               ]
            }
         },
         "examples": {
            "premium_rate": "1900123456",
            "toll_free": "1800123456",
            "voip": "992012345",
            "uan": "1992000",
            "fixed_line": "2101234567",
            "mobile": "912345678"
         },
         "formats": [
            {
               "pattern": "([17]99)(\\d{4})",
               "leading_digits_patterns": [
                  "[17]99"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{4})(\\d{4})",
               "leading_digits_patterns": [
                  "2[48]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(80)(\\d{5})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(69\\d)(\\d{4,5})",
               "leading_digits_patterns": [
                  "69"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{4})(\\d{3})",
               "leading_digits_patterns": [
                  "2[0-35-79]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([89]\\d)(\\d{3})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "8(?:8|9[89])|9"
               ],
               "format": "$1 $2 $3 $4"
            },
            {
               "pattern": "(1[2689]\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "1(?:[26]|8[68]|99)"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(86[689])(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "86[689]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(1[89]00)(\\d{4,6})",
               "leading_digits_patterns": [
                  "1[89]0",
                  "1[89]00"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9,
            10
         ]
      },
      "VU": {
         "phone_code": "678",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:[23]|[57]\\d\\d|900)\\d|[48]8)\\d{3}",
         "types": {
            "uan": {
               "pattern": "3[03]\\d{3}|900\\d{4}"
            },
            "fixed_line": {
               "pattern": "(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}",
               "possible_lengths": [
                  7
               ]
            }
         },
         "examples": {
            "uan": "30123",
            "fixed_line": "22123",
            "mobile": "5912345"
         },
         "formats": [
            {
               "pattern": "(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[579]"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            7
         ]
      },
      "WF": {
         "phone_code": "681",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[45]0|68|72|8\\d)\\d{4}",
         "types": {
            "fixed_line": {
               "pattern": "(?:50|68|72)\\d{4}"
            },
            "mobile": {
               "pattern": "(?:50|68|72|8[23])\\d{4}"
            }
         },
         "examples": {
            "fixed_line": "501234",
            "mobile": "501234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{2})(\\d{2})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            6
         ]
      },
      "WS": {
         "phone_code": "685",
         "idd_prefix": "0",
         "national_number_pattern": "(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}",
         "types": {
            "toll_free": {
               "pattern": "800\\d{3}",
               "possible_lengths": [
                  6
               ]
            },
            "fixed_line": {
               "pattern": "(?:[2-5]\\d|6[1-9])\\d{3}",
               "possible_lengths": [
                  5
               ]
            },
            "mobile": {
               "pattern": "(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}",
               "possible_lengths": [
                  7,
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "800123",
            "fixed_line": "22123",
            "mobile": "7212345"
         },
         "formats": [
            {
               "pattern": "(8\\d{2})(\\d{3,7})",
               "leading_digits_patterns": [
                  "8"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(7\\d)(\\d{5})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{5})",
               "leading_digits_patterns": [
                  "[2-6]"
               ],
               "format": "$1"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            10
         ]
      },
      "XK": {
         "phone_code": "383",
         "idd_prefix": "00",
         "national_number_pattern": "(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "900\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "toll_free": {
               "pattern": "800\\d{5}",
               "possible_lengths": [
                  8
               ]
            },
            "fixed_line": {
               "pattern": "(?:2[89]0?|3(?:8|90?))\\d{6}"
            },
            "mobile": {
               "pattern": "4[3-79]\\d{6}",
               "possible_lengths": [
                  8
               ]
            }
         },
         "examples": {
            "premium_rate": "90001234",
            "toll_free": "80001234",
            "fixed_line": "28012345",
            "mobile": "43201234"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "[23][89]|4[3-79]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{3})(\\d{5})",
               "leading_digits_patterns": [
                  "[89]00"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            8,
            9
         ]
      },
      "YE": {
         "phone_code": "967",
         "idd_prefix": "00",
         "national_number_pattern": "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "fixed_line": {
               "pattern": "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",
               "possible_lengths": [
                  7,
                  8
               ]
            },
            "mobile": {
               "pattern": "7[0137]\\d{7}",
               "possible_lengths": [
                  9
               ]
            }
         },
         "examples": {
            "fixed_line": "1234567",
            "mobile": "712345678"
         },
         "formats": [
            {
               "pattern": "([1-7])(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[1-6]|7[24-68]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(7\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "7[0137]"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            7,
            8,
            9
         ]
      },
      "YT": {
         "phone_code": "262",
         "idd_prefix": "00",
         "leading_digits": "269|63",
         "national_number_pattern": "(?:(?:26|63)9|80\\d)\\d{6}",
         "national_prefix": "0",
         "types": {
            "toll_free": {
               "pattern": "80\\d{7}"
            },
            "fixed_line": {
               "pattern": "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}"
            },
            "mobile": {
               "pattern": "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}"
            }
         },
         "examples": {
            "toll_free": "801234567",
            "fixed_line": "269601234",
            "mobile": "639012345"
         },
         "formats": [
            {
               "pattern": "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
               "leading_digits_patterns": [
                  "[268]"
               ],
               "format": "$1 $2 $3 $4"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "ZA": {
         "phone_code": "27",
         "idd_prefix": "00",
         "national_number_pattern": "[1-9]\\d{8}|8\\d{4,7}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "premium_rate": {
               "pattern": "86[2-9]\\d{6}|9[0-2]\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "toll_free": {
               "pattern": "80\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "shared_cost": {
               "pattern": "860\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "voip": {
               "pattern": "87\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "uan": {
               "pattern": "861\\d{6}",
               "possible_lengths": [
                  9
               ]
            },
            "fixed_line": {
               "pattern": "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",
               "possible_lengths": [
                  9
               ]
            },
            "mobile": {
               "pattern": "(?:6\\d|7[0-46-9])\\d{7}|8(?:[1-4]\\d{1,5}|5\\d{5})\\d{2}"
            }
         },
         "examples": {
            "premium_rate": "862345678",
            "toll_free": "801234567",
            "shared_cost": "860123456",
            "voip": "871234567",
            "uan": "861123456",
            "fixed_line": "101234567",
            "mobile": "711234567"
         },
         "formats": [
            {
               "pattern": "(860)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "860"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3,4})",
               "leading_digits_patterns": [
                  "8[1-4]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{2,3})",
               "leading_digits_patterns": [
                  "8[1-4]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(\\d{2})(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-79]|8(?:[0-57]|6[1-9])"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9
         ]
      },
      "ZM": {
         "phone_code": "260",
         "idd_prefix": "00",
         "national_number_pattern": "(?:(?:21|9\\d)\\d|800)\\d{6}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "800\\d{6}"
            },
            "fixed_line": {
               "pattern": "21[1-8]\\d{6}"
            },
            "mobile": {
               "pattern": "9[4-9]\\d{7}"
            }
         },
         "examples": {
            "toll_free": "800123456",
            "fixed_line": "211234567",
            "mobile": "955123456"
         },
         "formats": [
            {
               "pattern": "(\\d{2})(\\d{4})",
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2"
            },
            {
               "pattern": "([1-8])(\\d{2})(\\d{4})",
               "leading_digits_patterns": [
                  "[1-8]"
               ],
               "national_prefix_formatting_rule": "$1",
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([29]\\d)(\\d{7})",
               "leading_digits_patterns": [
                  "[29]"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(800)(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "800"
               ],
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      },
      "ZW": {
         "phone_code": "263",
         "idd_prefix": "00",
         "national_number_pattern": "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{7})|(?:[38]\\d|7)\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
         "national_prefix": "0",
         "national_prefix_formatting_rule": "0$1",
         "types": {
            "toll_free": {
               "pattern": "80(?:[01]\\d|20|8[0-8])\\d{3}",
               "possible_lengths": [
                  7
               ]
            },
            "voip": {
               "pattern": "86(?:1[12]|30|55|77|8[368])\\d{6}",
               "possible_lengths": [
                  10
               ]
            },
            "fixed_line": {
               "pattern": "(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|37|6[78]|75\\d|98|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|[4-8]|9\\d)|2(?:0\\d{2}|12|292|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|1[2-4]|26|[37]2|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83\\d|2582\\d{2}|65[2-8])\\d{2}|(?:4\\d{6,7}|9[2-9]\\d{4,5})"
            },
            "mobile": {
               "pattern": "(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}",
               "possible_lengths": [
                  9,
                  10
               ]
            }
         },
         "examples": {
            "toll_free": "8001234",
            "voip": "8686123456",
            "fixed_line": "1312345",
            "mobile": "712345678"
         },
         "formats": [
            {
               "pattern": "([49])(\\d{3})(\\d{2,4})",
               "leading_digits_patterns": [
                  "4|9[2-9]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(7\\d)(\\d{3})(\\d{4})",
               "leading_digits_patterns": [
                  "7"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "(86\\d{2})(\\d{3})(\\d{3})",
               "leading_digits_patterns": [
                  "86[24]"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([2356]\\d{2})(\\d{3,5})",
               "leading_digits_patterns": [
                  "2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(\\d{3})(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([1-356]\\d)(\\d{3,5})",
               "leading_digits_patterns": [
                  "1[3-9]|2[02569]|3[0-69]|5[05689]|6"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "([235]\\d)(\\d{3})(\\d{3,4})",
               "leading_digits_patterns": [
                  "[23]9|54"
               ],
               "format": "$1 $2 $3"
            },
            {
               "pattern": "([25]\\d{3})(\\d{3,5})",
               "leading_digits_patterns": [
                  "(?:25|54)8",
                  "258[23]|5483"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(8\\d{3})(\\d{6})",
               "leading_digits_patterns": [
                  "86"
               ],
               "format": "$1 $2"
            },
            {
               "pattern": "(80\\d)(\\d{4})",
               "leading_digits_patterns": [
                  "80"
               ],
               "format": "$1 $2"
            }
         ],
         "possible_lengths": [
            5,
            6,
            7,
            8,
            9,
            10
         ]
      },
      "001": {
         "phone_code": "979",
         "national_number_pattern": "\\d{9}",
         "types": {
            "premium_rate": {
               "pattern": "\\d{9}"
            }
         },
         "examples": {
            "premium_rate": "123456789"
         },
         "formats": [
            {
               "pattern": "(\\d)(\\d{4})(\\d{4})",
               "format": "$1 $2 $3"
            }
         ],
         "possible_lengths": [
            9
         ]
      }
   },
   "country_calling_codes": {
      "1": [
         "US",
         "AG",
         "AI",
         "AS",
         "BB",
         "BM",
         "BS",
         "CA",
         "DM",
         "DO",
         "GD",
         "GU",
         "JM",
         "KN",
         "KY",
         "LC",
         "MP",
         "MS",
         "PR",
         "SX",
         "TC",
         "TT",
         "VC",
         "VG",
         "VI"
      ],
      "7": [
         "RU",
         "KZ"
      ],
      "20": [
         "EG"
      ],
      "27": [
         "ZA"
      ],
      "30": [
         "GR"
      ],
      "31": [
         "NL"
      ],
      "32": [
         "BE"
      ],
      "33": [
         "FR"
      ],
      "34": [
         "ES"
      ],
      "36": [
         "HU"
      ],
      "39": [
         "IT",
         "VA"
      ],
      "40": [
         "RO"
      ],
      "41": [
         "CH"
      ],
      "43": [
         "AT"
      ],
      "44": [
         "GB",
         "GG",
         "IM",
         "JE"
      ],
      "45": [
         "DK"
      ],
      "46": [
         "SE"
      ],
      "47": [
         "NO",
         "SJ"
      ],
      "48": [
         "PL"
      ],
      "49": [
         "DE"
      ],
      "51": [
         "PE"
      ],
      "52": [
         "MX"
      ],
      "53": [
         "CU"
      ],
      "54": [
         "AR"
      ],
      "55": [
         "BR"
      ],
      "56": [
         "CL"
      ],
      "57": [
         "CO"
      ],
      "58": [
         "VE"
      ],
      "60": [
         "MY"
      ],
      "61": [
         "AU",
         "CC",
         "CX"
      ],
      "62": [
         "ID"
      ],
      "63": [
         "PH"
      ],
      "64": [
         "NZ"
      ],
      "65": [
         "SG"
      ],
      "66": [
         "TH"
      ],
      "81": [
         "JP"
      ],
      "82": [
         "KR"
      ],
      "84": [
         "VN"
      ],
      "86": [
         "CN"
      ],
      "90": [
         "TR"
      ],
      "91": [
         "IN"
      ],
      "92": [
         "PK"
      ],
      "93": [
         "AF"
      ],
      "94": [
         "LK"
      ],
      "95": [
         "MM"
      ],
      "98": [
         "IR"
      ],
      "211": [
         "SS"
      ],
      "212": [
         "MA",
         "EH"
      ],
      "213": [
         "DZ"
      ],
      "216": [
         "TN"
      ],
      "218": [
         "LY"
      ],
      "220": [
         "GM"
      ],
      "221": [
         "SN"
      ],
      "222": [
         "MR"
      ],
      "223": [
         "ML"
      ],
      "224": [
         "GN"
      ],
      "225": [
         "CI"
      ],
      "226": [
         "BF"
      ],
      "227": [
         "NE"
      ],
      "228": [
         "TG"
      ],
      "229": [
         "BJ"
      ],
      "230": [
         "MU"
      ],
      "231": [
         "LR"
      ],
      "232": [
         "SL"
      ],
      "233": [
         "GH"
      ],
      "234": [
         "NG"
      ],
      "235": [
         "TD"
      ],
      "236": [
         "CF"
      ],
      "237": [
         "CM"
      ],
      "238": [
         "CV"
      ],
      "239": [
         "ST"
      ],
      "240": [
         "GQ"
      ],
      "241": [
         "GA"
      ],
      "242": [
         "CG"
      ],
      "243": [
         "CD"
      ],
      "244": [
         "AO"
      ],
      "245": [
         "GW"
      ],
      "246": [
         "IO"
      ],
      "247": [
         "AC"
      ],
      "248": [
         "SC"
      ],
      "249": [
         "SD"
      ],
      "250": [
         "RW"
      ],
      "251": [
         "ET"
      ],
      "252": [
         "SO"
      ],
      "253": [
         "DJ"
      ],
      "254": [
         "KE"
      ],
      "255": [
         "TZ"
      ],
      "256": [
         "UG"
      ],
      "257": [
         "BI"
      ],
      "258": [
         "MZ"
      ],
      "260": [
         "ZM"
      ],
      "261": [
         "MG"
      ],
      "262": [
         "RE",
         "YT"
      ],
      "263": [
         "ZW"
      ],
      "264": [
         "NA"
      ],
      "265": [
         "MW"
      ],
      "266": [
         "LS"
      ],
      "267": [
         "BW"
      ],
      "268": [
         "SZ"
      ],
      "269": [
         "KM"
      ],
      "290": [
         "SH",
         "TA"
      ],
      "291": [
         "ER"
      ],
      "297": [
         "AW"
      ],
      "298": [
         "FO"
      ],
      "299": [
         "GL"
      ],
      "350": [
         "GI"
      ],
      "351": [
         "PT"
      ],
      "352": [
         "LU"
      ],
      "353": [
         "IE"
      ],
      "354": [
         "IS"
      ],
      "355": [
         "AL"
      ],
      "356": [
         "MT"
      ],
      "357": [
         "CY"
      ],
      "358": [
         "FI",
         "AX"
      ],
      "359": [
         "BG"
      ],
      "370": [
         "LT"
      ],
      "371": [
         "LV"
      ],
      "372": [
         "EE"
      ],
      "373": [
         "MD"
      ],
      "374": [
         "AM"
      ],
      "375": [
         "BY"
      ],
      "376": [
         "AD"
      ],
      "377": [
         "MC"
      ],
      "378": [
         "SM"
      ],
      "380": [
         "UA"
      ],
      "381": [
         "RS"
      ],
      "382": [
         "ME"
      ],
      "383": [
         "XK"
      ],
      "385": [
         "HR"
      ],
      "386": [
         "SI"
      ],
      "387": [
         "BA"
      ],
      "389": [
         "MK"
      ],
      "420": [
         "CZ"
      ],
      "421": [
         "SK"
      ],
      "423": [
         "LI"
      ],
      "500": [
         "FK"
      ],
      "501": [
         "BZ"
      ],
      "502": [
         "GT"
      ],
      "503": [
         "SV"
      ],
      "504": [
         "HN"
      ],
      "505": [
         "NI"
      ],
      "506": [
         "CR"
      ],
      "507": [
         "PA"
      ],
      "508": [
         "PM"
      ],
      "509": [
         "HT"
      ],
      "590": [
         "GP",
         "BL",
         "MF"
      ],
      "591": [
         "BO"
      ],
      "592": [
         "GY"
      ],
      "593": [
         "EC"
      ],
      "594": [
         "GF"
      ],
      "595": [
         "PY"
      ],
      "596": [
         "MQ"
      ],
      "597": [
         "SR"
      ],
      "598": [
         "UY"
      ],
      "599": [
         "CW",
         "BQ"
      ],
      "670": [
         "TL"
      ],
      "672": [
         "NF"
      ],
      "673": [
         "BN"
      ],
      "674": [
         "NR"
      ],
      "675": [
         "PG"
      ],
      "676": [
         "TO"
      ],
      "677": [
         "SB"
      ],
      "678": [
         "VU"
      ],
      "679": [
         "FJ"
      ],
      "680": [
         "PW"
      ],
      "681": [
         "WF"
      ],
      "682": [
         "CK"
      ],
      "683": [
         "NU"
      ],
      "685": [
         "WS"
      ],
      "686": [
         "KI"
      ],
      "687": [
         "NC"
      ],
      "688": [
         "TV"
      ],
      "689": [
         "PF"
      ],
      "690": [
         "TK"
      ],
      "691": [
         "FM"
      ],
      "692": [
         "MH"
      ],
      "800": [
         "001"
      ],
      "808": [
         "001"
      ],
      "850": [
         "KP"
      ],
      "852": [
         "HK"
      ],
      "853": [
         "MO"
      ],
      "855": [
         "KH"
      ],
      "856": [
         "LA"
      ],
      "870": [
         "001"
      ],
      "878": [
         "001"
      ],
      "880": [
         "BD"
      ],
      "881": [
         "001"
      ],
      "882": [
         "001"
      ],
      "883": [
         "001"
      ],
      "886": [
         "TW"
      ],
      "888": [
         "001"
      ],
      "960": [
         "MV"
      ],
      "961": [
         "LB"
      ],
      "962": [
         "JO"
      ],
      "963": [
         "SY"
      ],
      "964": [
         "IQ"
      ],
      "965": [
         "KW"
      ],
      "966": [
         "SA"
      ],
      "967": [
         "YE"
      ],
      "968": [
         "OM"
      ],
      "970": [
         "PS"
      ],
      "971": [
         "AE"
      ],
      "972": [
         "IL"
      ],
      "973": [
         "BH"
      ],
      "974": [
         "QA"
      ],
      "975": [
         "BT"
      ],
      "976": [
         "MN"
      ],
      "977": [
         "NP"
      ],
      "979": [
         "001"
      ],
      "992": [
         "TJ"
      ],
      "993": [
         "TM"
      ],
      "994": [
         "AZ"
      ],
      "995": [
         "GE"
      ],
      "996": [
         "KG"
      ],
      "998": [
         "UZ"
      ]
   }
}