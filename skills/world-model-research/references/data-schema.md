# Research map schema

The HTML is intentionally self-contained. Keep the following fields stable so future updates can be made without rewriting the UI.

## Team node

```js
{
  id, name, sub,
  tracks: [], adj: [],
  level: 'verified' | 'project' | 'pending',
  summary, evidence: [], people: [], roster: [], url
}
```

`tracks` are direct capabilities. `adj` are adjacent capabilities and should be visually weaker in the matrix.

## Company profile

```js
{
  teamId, color, business, product, customer,
  model, entry, status
}
```

Use `business` for the customer-facing activity, `product` for named products/models/APIs, `model` for the role of the world model, and `entry` for the route to adoption or revenue.

## Person node

Use the existing fields `education`, `previous`, `contribution`, `projects`, `relation`, `signal`, and `social`. Keep uncertain roles as `pending` and explain the uncertainty in `bio` or `relation`.

## Release checklist

- Check the primary URL and date.
- Distinguish official claims from media claims.
- Do not convert a target metric into a reproduced benchmark.
- Update the visible “last verification” fact for material changes.
- Run the HTML checker and standalone exporter.
- Search the output for the new company name and at least one product name.
