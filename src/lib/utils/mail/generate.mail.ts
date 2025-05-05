export const genHTMLForContactUsMail = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `<div style="color: white; background-color: black; width: 100%; height: 100%;">

      <div
        style="
          margin: auto;
          min-height: 100vh;
          background-color: black;
          color: white;
        "
      >
        <div style="padding: 40px 0;">
          <h1
            style="
              background: linear-gradient(to right, #5c6ac4, #8b5cf6);
              background-clip: text;
              text-align: center;
              font-size: 2.5rem;
              font-weight: bold;
              color: white;
              -webkit-text-fill-color: transparent;
            "
          >
            Connect to SyntaxSyndicate
          </h1>
          <p style="text-align: center">Why not have a chat while you can.</p>
        </div>
        <div
          style="
            margin: auto;
            background-color: #312e81;
            width: 75%;
            height: 100%;
            padding: 20px;
            border-radius: 1rem;
          "
        >
          <h1 style="font-size: 2rem;">Hey, I'm &nbsp;<strong>${name}</strong>,</h1>
          <p>
            Contact me at &nbsp;<a
              style="text-decoration: underline; color: #3b82f6"
              href="mailto:${email}"
              >${email}</a
            >,
          </p>
          <br/>
          <hr/>
          <br/>
          <p>Message: ${message}</p>
        </div>
        <div style="padding: 40px; margin: auto;">
          <p>
            <strong>Info: </strong>Anyone can contact from any email as It is
            not required to be loggedin in order to contact.<br />Hence one can foul his/her
            identity.
          </p>
        </div>
    </div>
      </div>
</div>
`;
