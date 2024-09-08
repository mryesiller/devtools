"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"

const statusCodes = [
  {
    statusCode: "100",
    statusDescription: "Continue",
    explanation:
      "The server has received the request headers and the client should proceed to send the request body.",
  },
  {
    statusCode: "101",
    statusDescription: "Switching Protocols",
    explanation:
      "The requester has asked the server to switch protocols and the server has agreed to do so.",
  },
  {
    statusCode: "200",
    statusDescription: "OK",
    explanation:
      "The request was successful and the server has returned the requested data.",
  },
  {
    statusCode: "201",
    statusDescription: "Created",
    explanation:
      "The request was successful and a new resource was created as a result.",
  },
  {
    statusCode: "202",
    statusDescription: "Accepted",
    explanation:
      "The request has been accepted for processing, but the processing has not been completed.",
  },
  {
    statusCode: "203",
    statusDescription: "Non-Authoritative Information",
    explanation:
      "The server successfully processed the request but is returning information from another source.",
  },
  {
    statusCode: "204",
    statusDescription: "No Content",
    explanation:
      "The server successfully processed the request but is not returning any content.",
  },
  {
    statusCode: "205",
    statusDescription: "Reset Content",
    explanation:
      "The server successfully processed the request, but is not returning any content. Unlike 204, this response requires the requester to reset the document view.",
  },
  {
    statusCode: "206",
    statusDescription: "Partial Content",
    explanation:
      "The server is delivering only part of the resource due to a range header sent by the client.",
  },
  {
    statusCode: "300",
    statusDescription: "Multiple Choices",
    explanation:
      "The requested resource has multiple representations, each with its own specific location.",
  },
  {
    statusCode: "301",
    statusDescription: "Moved Permanently",
    explanation:
      "The requested resource has been permanently moved to a new URL.",
  },
  {
    statusCode: "302",
    statusDescription: "Found",
    explanation:
      "The requested resource resides temporarily under a different URL.",
  },
  {
    statusCode: "303",
    statusDescription: "See Other",
    explanation:
      "The response to the request can be found under a different URL and should be retrieved using a GET method on that resource.",
  },
  {
    statusCode: "304",
    statusDescription: "Not Modified",
    explanation:
      "The resource has not been modified since the version specified by the request headers.",
  },
  {
    statusCode: "307",
    statusDescription: "Temporary Redirect",
    explanation:
      "The requested resource resides temporarily under a different URL.",
  },
  {
    statusCode: "308",
    statusDescription: "Permanent Redirect",
    explanation:
      "The requested resource has been permanently moved to another URL.",
  },
  {
    statusCode: "400",
    statusDescription: "Bad Request",
    explanation:
      "The server cannot or will not process the request due to an apparent client error.",
  },
  {
    statusCode: "401",
    statusDescription: "Unauthorized",
    explanation:
      "Authentication is required and has failed or has not yet been provided.",
  },
  {
    statusCode: "402",
    statusDescription: "Payment Required",
    explanation:
      "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme.",
  },
  {
    statusCode: "403",
    statusDescription: "Forbidden",
    explanation:
      "The server understood the request but refuses to authorize it.",
  },
  {
    statusCode: "404",
    statusDescription: "Not Found",
    explanation: "The requested resource could not be found on the server.",
  },
  {
    statusCode: "405",
    statusDescription: "Method Not Allowed",
    explanation:
      "The method specified in the request is not allowed for the resource identified by the request URI.",
  },
  {
    statusCode: "406",
    statusDescription: "Not Acceptable",
    explanation:
      "The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.",
  },
  {
    statusCode: "407",
    statusDescription: "Proxy Authentication Required",
    explanation: "The client must first authenticate itself with the proxy.",
  },
  {
    statusCode: "408",
    statusDescription: "Request Timeout",
    explanation: "The server timed out waiting for the request.",
  },
  {
    statusCode: "409",
    statusDescription: "Conflict",
    explanation:
      "The request could not be processed because of conflict in the request.",
  },
  {
    statusCode: "410",
    statusDescription: "Gone",
    explanation:
      "The requested resource is no longer available and will not be available again.",
  },
  {
    statusCode: "411",
    statusDescription: "Length Required",
    explanation:
      "The request did not specify the length of its content, which is required by the requested resource.",
  },
  {
    statusCode: "412",
    statusDescription: "Precondition Failed",
    explanation:
      "The server does not meet one of the preconditions that the requester put on the request.",
  },
  {
    statusCode: "413",
    statusDescription: "Payload Too Large",
    explanation:
      "The request is larger than the server is willing or able to process.",
  },
  {
    statusCode: "414",
    statusDescription: "URI Too Long",
    explanation: "The URI provided was too long for the server to process.",
  },
  {
    statusCode: "415",
    statusDescription: "Unsupported Media Type",
    explanation:
      "The request entity has a media type which the server or resource does not support.",
  },
  {
    statusCode: "416",
    statusDescription: "Range Not Satisfiable",
    explanation:
      "The client has asked for a portion of the file, but the server cannot supply that portion.",
  },
  {
    statusCode: "417",
    statusDescription: "Expectation Failed",
    explanation:
      "The server cannot meet the requirements of the Expect request-header field.",
  },
  {
    statusCode: "418",
    statusDescription: "I'm a teapot",
    explanation:
      "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol.",
  },
  {
    statusCode: "422",
    statusDescription: "Unprocessable Entity",
    explanation:
      "The request was well-formed but was unable to be followed due to semantic errors.",
  },
  {
    statusCode: "425",
    statusDescription: "Too Early",
    explanation:
      "The server is unwilling to risk processing a request that might be replayed.",
  },
  {
    statusCode: "426",
    statusDescription: "Upgrade Required",
    explanation:
      "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.",
  },
  {
    statusCode: "428",
    statusDescription: "Precondition Required",
    explanation: "The origin server requires the request to be conditional.",
  },
  {
    statusCode: "429",
    statusDescription: "Too Many Requests",
    explanation:
      "The user has sent too many requests in a given amount of time.",
  },
  {
    statusCode: "431",
    statusDescription: "Request Header Fields Too Large",
    explanation:
      "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
  },
  {
    statusCode: "451",
    statusDescription: "Unavailable For Legal Reasons",
    explanation:
      "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.",
  },
  {
    statusCode: "500",
    statusDescription: "Internal Server Error",
    explanation:
      "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
  },
  {
    statusCode: "501",
    statusDescription: "Not Implemented",
    explanation:
      "The server either does not recognize the request method, or it lacks the ability to fulfill the request.",
  },
  {
    statusCode: "502",
    statusDescription: "Bad Gateway",
    explanation:
      "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
  },
  {
    statusCode: "503",
    statusDescription: "Service Unavailable",
    explanation:
      "The server is currently unavailable (because it is overloaded or down for maintenance).",
  },
  {
    statusCode: "504",
    statusDescription: "Gateway Timeout",
    explanation:
      "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
  },
  {
    statusCode: "505",
    statusDescription: "HTTP Version Not Supported",
    explanation:
      "The server does not support the HTTP protocol version used in the request.",
  },
  {
    statusCode: "506",
    statusDescription: "Variant Also Negotiates",
    explanation:
      "Transparent content negotiation for the request results in a circular reference.",
  },
  {
    statusCode: "507",
    statusDescription: "Insufficient Storage",
    explanation:
      "The server is unable to store the representation needed to complete the request.",
  },
  {
    statusCode: "508",
    statusDescription: "Loop Detected",
    explanation:
      "The server detected an infinite loop while processing the request.",
  },
  {
    statusCode: "510",
    statusDescription: "Not Extended",
    explanation:
      "Further extensions to the request are required for the server to fulfill it.",
  },
  {
    statusCode: "511",
    statusDescription: "Network Authentication Required",
    explanation: "The client needs to authenticate to gain network access.",
  },
]

export function HTTPStatusCodeReference() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStatusCodes = statusCodes.filter(
    (code) =>
      code.statusCode.includes(searchTerm) ||
      code.statusDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search status codes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
      <ul className="space-y-2">
        {filteredStatusCodes.map((code) => (
          <li
            key={code.statusCode}
            className="bg-card p-4 rounded-md shadow-sm"
          >
            <div className="font-bold text-xl mb-2">{code.statusCode}</div>
            <div className="text-muted-foreground mb-1">
              {code.statusDescription}
            </div>
            <div className="text-sm text-muted-foreground">
              {code.explanation}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
