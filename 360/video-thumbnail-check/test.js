
const API_URL = 'https://vision.googleapis.com/v1/images:annotate';

const requestPayload = {
  "requests": [
    {
      "features": [
        {
          "maxResults": 50,
          "type": "LANDMARK_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "FACE_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "OBJECT_LOCALIZATION"
        },
        {
          "maxResults": 50,
          "type": "LOGO_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "LABEL_DETECTION"
        },
        {
          "maxResults": 50,
          "model": "builtin/latest",
          "type": "DOCUMENT_TEXT_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "SAFE_SEARCH_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "IMAGE_PROPERTIES"
        },
        {
          "maxResults": 50,
          "type": "CROP_HINTS"
        }
      ],
      "image": {
        "content": "(data from mad_max_youtube_thumb2.png)"
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0.8,
            1,
            1.2
          ]
        }
      }
    }
  ]
}


const responseSample = {
    "cropHintsAnnotation": {
      "cropHints": [
        {
          "boundingPoly": {
            "vertices": [
              {
                "x": 64
              },
              {
                "x": 640
              },
              {
                "x": 640,
                "y": 719
              },
              {
                "x": 64,
                "y": 719
              }
            ]
          },
          "confidence": 0.8506945,
          "importanceFraction": 0.7777778
        },
        {
          "boundingPoly": {
            "vertices": [
              {
                "x": 64
              },
              {
                "x": 784
              },
              {
                "x": 784,
                "y": 719
              },
              {
                "x": 64,
                "y": 719
              }
            ]
          },
          "confidence": 0.8555556,
          "importanceFraction": 0.97777784
        },
        {
          "boundingPoly": {
            "vertices": [
              {},
              {
                "x": 864
              },
              {
                "x": 864,
                "y": 719
              },
              {
                "y": 719
              }
            ]
          },
          "confidence": 0.72916657,
          "importanceFraction": 1
        }
      ]
    },
    "fullTextAnnotation": {
      "pages": [
        {
          "blocks": [
            {
              "blockType": "TEXT",
              "boundingBox": {
                "vertices": [
                  {
                    "x": 38,
                    "y": 59
                  },
                  {
                    "x": 394,
                    "y": 51
                  },
                  {
                    "x": 399,
                    "y": 271
                  },
                  {
                    "x": 43,
                    "y": 279
                  }
                ]
              },
              "confidence": 0.89964014,
              "paragraphs": [
                {
                  "boundingBox": {
                    "vertices": [
                      {
                        "x": 38,
                        "y": 59
                      },
                      {
                        "x": 394,
                        "y": 51
                      },
                      {
                        "x": 399,
                        "y": 271
                      },
                      {
                        "x": 43,
                        "y": 279
                      }
                    ]
                  },
                  "confidence": 0.89964014,
                  "words": [
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 59,
                            "y": 59
                          },
                          {
                            "x": 394,
                            "y": 57
                          },
                          {
                            "x": 395,
                            "y": 148
                          },
                          {
                            "x": 60,
                            "y": 150
                          }
                        ]
                      },
                      "confidence": 0.8487925,
                      "symbols": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 59,
                                "y": 60
                              },
                              {
                                "x": 156,
                                "y": 59
                              },
                              {
                                "x": 157,
                                "y": 149
                              },
                              {
                                "x": 60,
                                "y": 150
                              }
                            ]
                          },
                          "confidence": 0.9343297,
                          "text": "M"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 164,
                                "y": 59
                              },
                              {
                                "x": 251,
                                "y": 58
                              },
                              {
                                "x": 252,
                                "y": 148
                              },
                              {
                                "x": 165,
                                "y": 149
                              }
                            ]
                          },
                          "confidence": 0.85388535,
                          "text": "A"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 257,
                                "y": 58
                              },
                              {
                                "x": 325,
                                "y": 58
                              },
                              {
                                "x": 326,
                                "y": 148
                              },
                              {
                                "x": 258,
                                "y": 148
                              }
                            ]
                          },
                          "confidence": 0.8839666,
                          "text": "D"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 331,
                                "y": 58
                              },
                              {
                                "x": 394,
                                "y": 58
                              },
                              {
                                "x": 395,
                                "y": 148
                              },
                              {
                                "x": 332,
                                "y": 148
                              }
                            ]
                          },
                          "confidence": 0.72298837,
                          "property": {
                            "detectedBreak": {
                              "type": "EOL_SURE_SPACE"
                            }
                          },
                          "text": "E"
                        }
                      ]
                    },
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 41,
                            "y": 171
                          },
                          {
                            "x": 336,
                            "y": 159
                          },
                          {
                            "x": 340,
                            "y": 267
                          },
                          {
                            "x": 45,
                            "y": 279
                          }
                        ]
                      },
                      "confidence": 0.967437,
                      "symbols": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 41,
                                "y": 172
                              },
                              {
                                "x": 146,
                                "y": 168
                              },
                              {
                                "x": 150,
                                "y": 275
                              },
                              {
                                "x": 45,
                                "y": 279
                              }
                            ]
                          },
                          "confidence": 0.9480003,
                          "text": "M"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 143,
                                "y": 167
                              },
                              {
                                "x": 246,
                                "y": 163
                              },
                              {
                                "x": 250,
                                "y": 270
                              },
                              {
                                "x": 147,
                                "y": 274
                              }
                            ]
                          },
                          "confidence": 0.97502476,
                          "text": "A"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 235,
                                "y": 164
                              },
                              {
                                "x": 336,
                                "y": 160
                              },
                              {
                                "x": 340,
                                "y": 267
                              },
                              {
                                "x": 239,
                                "y": 271
                              }
                            ]
                          },
                          "confidence": 0.97928596,
                          "property": {
                            "detectedBreak": {
                              "type": "LINE_BREAK"
                            }
                          },
                          "text": "X"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "blockType": "TEXT",
              "boundingBox": {
                "vertices": [
                  {
                    "x": 66,
                    "y": 541
                  },
                  {
                    "x": 298,
                    "y": 539
                  },
                  {
                    "x": 299,
                    "y": 639
                  },
                  {
                    "x": 67,
                    "y": 641
                  }
                ]
              },
              "confidence": 0.9907777,
              "paragraphs": [
                {
                  "boundingBox": {
                    "vertices": [
                      {
                        "x": 66,
                        "y": 541
                      },
                      {
                        "x": 298,
                        "y": 539
                      },
                      {
                        "x": 299,
                        "y": 639
                      },
                      {
                        "x": 67,
                        "y": 641
                      }
                    ]
                  },
                  "confidence": 0.9907777,
                  "words": [
                    {
                      "boundingBox": {
                        "vertices": [
                          {
                            "x": 66,
                            "y": 541
                          },
                          {
                            "x": 298,
                            "y": 539
                          },
                          {
                            "x": 299,
                            "y": 639
                          },
                          {
                            "x": 67,
                            "y": 641
                          }
                        ]
                      },
                      "confidence": 0.9907777,
                      "symbols": [
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 66,
                                "y": 541
                              },
                              {
                                "x": 143,
                                "y": 540
                              },
                              {
                                "x": 144,
                                "y": 640
                              },
                              {
                                "x": 67,
                                "y": 641
                              }
                            ]
                          },
                          "confidence": 0.98964113,
                          "text": "3"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 142,
                                "y": 540
                              },
                              {
                                "x": 214,
                                "y": 540
                              },
                              {
                                "x": 215,
                                "y": 640
                              },
                              {
                                "x": 143,
                                "y": 640
                              }
                            ]
                          },
                          "confidence": 0.99479586,
                          "text": "6"
                        },
                        {
                          "boundingBox": {
                            "vertices": [
                              {
                                "x": 213,
                                "y": 540
                              },
                              {
                                "x": 298,
                                "y": 539
                              },
                              {
                                "x": 299,
                                "y": 639
                              },
                              {
                                "x": 214,
                                "y": 640
                              }
                            ]
                          },
                          "confidence": 0.987896,
                          "property": {
                            "detectedBreak": {
                              "type": "LINE_BREAK"
                            }
                          },
                          "text": "0"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "confidence": 0.9452089,
          "height": 720,
          "width": 1280
        }
      ],
      "text": "MADE\nMAX\n360"
    },
    "imagePropertiesAnnotation": {
      "cropHints": [
        {
          "boundingPoly": {
            "vertices": [
              {
                "x": 64
              },
              {
                "x": 640
              },
              {
                "x": 640,
                "y": 719
              },
              {
                "x": 64,
                "y": 719
              }
            ]
          },
          "confidence": 0.8506945,
          "importanceFraction": 0.7777778
        },
        {
          "boundingPoly": {
            "vertices": [
              {
                "x": 64
              },
              {
                "x": 784
              },
              {
                "x": 784,
                "y": 719
              },
              {
                "x": 64,
                "y": 719
              }
            ]
          },
          "confidence": 0.8555556,
          "importanceFraction": 0.97777784
        },
        {
          "boundingPoly": {
            "vertices": [
              {},
              {
                "x": 864
              },
              {
                "x": 864,
                "y": 719
              },
              {
                "y": 719
              }
            ]
          },
          "confidence": 0.72916657,
          "importanceFraction": 1
        }
      ],
      "dominantColors": {
        "colors": [
          {
            "color": {
              "blue": 89,
              "green": 116,
              "red": 132
            },
            "hex": "847459",
            "percent": 17.172592141200486,
            "percentRounded": 17,
            "pixelFraction": 0.025396826,
            "rgb": "132, 116,\n 89",
            "score": 0.08471949
          },
          {
            "color": {
              "blue": 159,
              "green": 192,
              "red": 214
            },
            "hex": "D6C09F",
            "percent": 8.463730821127434,
            "percentRounded": 8,
            "pixelFraction": 0.016587302,
            "rgb": "214, 192,\n 159",
            "score": 0.04175508
          },
          {
            "color": {
              "blue": 63,
              "green": 107,
              "red": 159
            },
            "hex": "9F6B3F",
            "percent": 7.8832929018244124,
            "percentRounded": 8,
            "pixelFraction": 0.017857144,
            "rgb": "159, 107,\n 63",
            "score": 0.03889154
          },
          {
            "color": {
              "blue": 171,
              "green": 227,
              "red": 246
            },
            "hex": "F6E3AB",
            "percent": 6.8870886594162,
            "percentRounded": 7,
            "pixelFraction": 0.004206349,
            "rgb": "246, 227,\n 171",
            "score": 0.033976853
          },
          {
            "color": {
              "blue": 57,
              "green": 81,
              "red": 96
            },
            "hex": "605139",
            "percent": 16.12976439532012,
            "percentRounded": 16,
            "pixelFraction": 0.029285714,
            "rgb": "96, 81,\n 57",
            "score": 0.07957479
          },
          {
            "color": {
              "blue": 33,
              "green": 53,
              "red": 67
            },
            "hex": "433521",
            "percent": 14.260320275149715,
            "percentRounded": 14,
            "pixelFraction": 0.052301586,
            "rgb": "67, 53,\n 33",
            "score": 0.07035205
          },
          {
            "color": {
              "blue": 46,
              "green": 53,
              "red": 58
            },
            "hex": "3A352E",
            "percent": 9.009803079451867,
            "percentRounded": 9,
            "pixelFraction": 0.14388889,
            "rgb": "58, 53,\n 46",
            "score": 0.04444908
          },
          {
            "color": {
              "blue": 123,
              "green": 151,
              "red": 171
            },
            "hex": "AB977B",
            "percent": 7.880320517416071,
            "percentRounded": 8,
            "pixelFraction": 0.0153174605,
            "rgb": "171, 151,\n 123",
            "score": 0.038876876
          },
          {
            "color": {
              "blue": 193,
              "green": 230,
              "red": 248
            },
            "hex": "F8E6C1",
            "percent": 6.44536951238123,
            "percentRounded": 6,
            "pixelFraction": 0.015555556,
            "rgb": "248, 230,\n 193",
            "score": 0.03179767
          },
          {
            "color": {
              "blue": 31,
              "green": 75,
              "red": 124
            },
            "hex": "7C4B1F",
            "percent": 5.8677176967124565,
            "percentRounded": 6,
            "pixelFraction": 0.013253968,
            "rgb": "124, 75,\n 31",
            "score": 0.028947875
          }
        ]
      }
    },
    "labelAnnotations": [
      {
        "description": "Vehicle",
        "mid": "/m/07yv9",
        "score": 0.9552291,
        "topicality": 0.9552291
      },
      {
        "description": "Car",
        "mid": "/m/0k4j",
        "score": 0.95072436,
        "topicality": 0.95072436
      },
      {
        "description": "Wheel",
        "mid": "/m/083wq",
        "score": 0.9480377,
        "topicality": 0.9480377
      },
      {
        "description": "Motor vehicle",
        "mid": "/m/012f08",
        "score": 0.92067957,
        "topicality": 0.92067957
      },
      {
        "description": "Automotive lighting",
        "mid": "/m/0768fx",
        "score": 0.9204043,
        "topicality": 0.9204043
      },
      {
        "description": "Hood",
        "mid": "/m/02df64",
        "score": 0.9182312,
        "topicality": 0.9182312
      },
      {
        "description": "Automotive design",
        "mid": "/m/068mqj",
        "score": 0.89961845,
        "topicality": 0.89961845
      },
      {
        "description": "Automotive tire",
        "mid": "/m/0h8pb3l",
        "score": 0.8935937,
        "topicality": 0.8935937
      },
      {
        "description": "Plant",
        "mid": "/m/05s2s",
        "score": 0.85046196,
        "topicality": 0.85046196
      },
      {
        "description": "Automotive exterior",
        "mid": "/m/0h8ls87",
        "score": 0.83966476,
        "topicality": 0.83966476
      },
      {
        "description": "Tree",
        "mid": "/m/07j7r",
        "score": 0.83691984,
        "topicality": 0.83691984
      },
      {
        "description": "Bumper",
        "mid": "/m/02mnkq",
        "score": 0.81489336,
        "topicality": 0.81489336
      },
      {
        "description": "Fender",
        "mid": "/m/0d74dx",
        "score": 0.8090746,
        "topicality": 0.8090746
      },
      {
        "description": "Automotive mirror",
        "mid": "/m/0h8lk4b",
        "score": 0.80767924,
        "topicality": 0.80767924
      },
      {
        "description": "Personal luxury car",
        "mid": "/m/01w71f",
        "score": 0.80660385,
        "topicality": 0.80660385
      },
      {
        "description": "Vehicle door",
        "mid": "/m/02q2kc3",
        "score": 0.79348063,
        "topicality": 0.79348063
      },
      {
        "description": "Headlamp",
        "mid": "/m/0263qm",
        "score": 0.7886275,
        "topicality": 0.7886275
      },
      {
        "description": "Tints and shades",
        "mid": "/m/02q_bfg",
        "score": 0.76981866,
        "topicality": 0.76981866
      },
      {
        "description": "Rim",
        "mid": "/m/047vmg8",
        "score": 0.7608533,
        "topicality": 0.7608533
      },
      {
        "description": "Sky",
        "mid": "/m/01bqvp",
        "score": 0.7373702,
        "topicality": 0.7373702
      },
      {
        "description": "Automotive wheel system",
        "mid": "/m/0h8ly30",
        "score": 0.72309583,
        "topicality": 0.72309583
      },
      {
        "description": "Auto part",
        "mid": "/m/08dz3q",
        "score": 0.709249,
        "topicality": 0.709249
      },
      {
        "description": "Hardtop",
        "mid": "/m/03m7v4",
        "score": 0.70856935,
        "topicality": 0.70856935
      },
      {
        "description": "Landscape",
        "mid": "/m/025s3q0",
        "score": 0.7082145,
        "topicality": 0.7082145
      },
      {
        "description": "Classic car",
        "mid": "/m/01xsb3",
        "score": 0.70421726,
        "topicality": 0.70421726
      },
      {
        "description": "Windshield",
        "mid": "/m/01lrnl",
        "score": 0.69429857,
        "topicality": 0.69429857
      },
      {
        "description": "Rear-view mirror",
        "mid": "/m/05j11x",
        "score": 0.67758954,
        "topicality": 0.67758954
      },
      {
        "description": "Windscreen wiper",
        "mid": "/m/02417f",
        "score": 0.6770296,
        "topicality": 0.6770296
      },
      {
        "description": "Performance car",
        "mid": "/m/06j11d",
        "score": 0.67049086,
        "topicality": 0.67049086
      },
      {
        "description": "Classic",
        "mid": "/g/12233hjw",
        "score": 0.66730714,
        "topicality": 0.66730714
      },
      {
        "description": "Luxury vehicle",
        "mid": "/m/01lcwm",
        "score": 0.6604595,
        "topicality": 0.6604595
      },
      {
        "description": "Font",
        "mid": "/m/03gq5hm",
        "score": 0.65793896,
        "topicality": 0.65793896
      },
      {
        "description": "Automotive window part",
        "mid": "/m/0h8lhq_",
        "score": 0.6405899,
        "topicality": 0.6405899
      },
      {
        "description": "Logo",
        "mid": "/m/0dwx7",
        "score": 0.6357048,
        "topicality": 0.6357048
      },
      {
        "description": "Sports car",
        "mid": "/m/012mq4",
        "score": 0.632761,
        "topicality": 0.632761
      },
      {
        "description": "Full-size car",
        "mid": "/m/03vntj",
        "score": 0.62915385,
        "topicality": 0.62915385
      },
      {
        "description": "Family car",
        "mid": "/m/088l6h",
        "score": 0.61899173,
        "topicality": 0.61899173
      },
      {
        "description": "Graphics",
        "mid": "/m/021sdg",
        "score": 0.6161591,
        "topicality": 0.6161591
      },
      {
        "description": "Advertising",
        "mid": "/m/011s0",
        "score": 0.6023469,
        "topicality": 0.6023469
      },
      {
        "description": "Tire",
        "mid": "/m/0h9mv",
        "score": 0.59816504,
        "topicality": 0.59816504
      },
      {
        "description": "Mid-size car",
        "mid": "/m/03vnt4",
        "score": 0.5958813,
        "topicality": 0.5958813
      },
      {
        "description": "Antique car",
        "mid": "/m/025qfg",
        "score": 0.5866258,
        "topicality": 0.5866258
      },
      {
        "description": "Custom car",
        "mid": "/m/06kk62",
        "score": 0.5465393,
        "topicality": 0.5465393
      },
      {
        "description": "Brand",
        "mid": "/m/01cd9",
        "score": 0.54274726,
        "topicality": 0.54274726
      },
      {
        "description": "Muscle car",
        "mid": "/m/01h80k",
        "score": 0.5356409,
        "topicality": 0.5356409
      },
      {
        "description": "Road",
        "mid": "/m/06gfj",
        "score": 0.5351936,
        "topicality": 0.5351936
      },
      {
        "description": "Glass",
        "mid": "/m/039jq",
        "score": 0.5315513,
        "topicality": 0.5315513
      },
      {
        "description": "City car",
        "mid": "/m/0369ss",
        "score": 0.5285728,
        "topicality": 0.5285728
      },
      {
        "description": "Vintage car",
        "mid": "/m/01xq49",
        "score": 0.52838594,
        "topicality": 0.52838594
      },
      {
        "description": "Compact car",
        "mid": "/m/02swz_",
        "score": 0.5275988,
        "topicality": 0.5275988
      }
    ],
    "safeSearchAnnotation": {
      "adult": "VERY_UNLIKELY",
      "medical": "VERY_UNLIKELY",
      "racy": "UNLIKELY",
      "spoof": "VERY_UNLIKELY",
      "violence": "VERY_UNLIKELY"
    },
    "textAnnotations": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 38,
              "y": 51
            },
            {
              "x": 399,
              "y": 51
            },
            {
              "x": 399,
              "y": 641
            },
            {
              "x": 38,
              "y": 641
            }
          ]
        },
        "description": "MADE\nMAX\n360",
        "locale": "und"
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 59,
              "y": 59
            },
            {
              "x": 394,
              "y": 57
            },
            {
              "x": 395,
              "y": 148
            },
            {
              "x": 60,
              "y": 150
            }
          ]
        },
        "description": "MADE"
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 41,
              "y": 171
            },
            {
              "x": 336,
              "y": 159
            },
            {
              "x": 340,
              "y": 267
            },
            {
              "x": 45,
              "y": 279
            }
          ]
        },
        "description": "MAX"
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 66,
              "y": 541
            },
            {
              "x": 298,
              "y": 539
            },
            {
              "x": 299,
              "y": 639
            },
            {
              "x": 67,
              "y": 641
            }
          ]
        },
        "description": "360"
      }
    ]
  }