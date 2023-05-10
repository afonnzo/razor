export function Card(props) {
  var a;
  if (props.data.isPrimary) {
    a = "Up To";
  } else {
    a = "sei la";
  }

  return (
    <div
      style={{
        display: "flex",
        alignSelf: props.data.isPrimary ? "start" : "end",
        gap: 20,
        flexDirection: props.data.isPrimary ? "row" : "row-reverse",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: props.data.isPrimary ? "right" : "left",

          gap: 10,
        }}
      >
        <span>{a}</span>
        <span id="porcentagem">10%</span>
        <span>Discount on Crypto</span>
        <span class="listLateral">Bank Account -</span>
        <span class="listLateral">Credit Cards -</span>
        <span class="listLateral">Crypto / Coin -</span>
      </div>
      <div id={props.data.isPrimary === true ? "cardprimary" : "cardsecondary"}>
        <span id="validade">{props.data.date}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ color: "var(--bg)", opacity: 0.5 }}>
            {props.data.middleTitle}
          </span>
          <span
            style={{ color: "var(--bg)", fontSize: 36, fontWeight: "bold" }}
          >
            23,890
          </span>
        </div>
        {props.data.infoBottom === true ? (
          <div id="infobottom">
            <span>****</span>
            <span>3667</span>
            <div>...</div>
          </div>
        ) : (
          <div id="infobottom2">
            <span>+7%</span>
            <span>Teste do false</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <section id="containerCards">
      <Card
        data={{
          date: "05/23",
          middleTitle: "Balance",
          infoBottom: true,
          isPrimary: true,
        }}
      />
      <Card
        data={{
          date: "",
          middleTitle: "Total Views",
          infoBottom: false,
          isPrimary: false,
        }}
      />
    </section>
  );
}
