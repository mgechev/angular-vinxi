import { eventHandler, toWebRequest } from "vinxi/http";

export default eventHandler((event) => {
	return new Response(
		`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <app-root></app-root>
        <script src="./src/main.ts" type="module"></script>
      </body>
    </html>

  `,
		{
			status: 200,
			headers: {
				"Content-Type": "text/html",
			},
		},
	);
});