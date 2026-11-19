# Full Stack Open

Solutions to the exercises of the [Full Stack Open](https://fullstackopen.com/en/) course by the University of Helsinki.

The course covers modern JavaScript/TypeScript web development: React, Zustand, Node.js, Express, MongoDB, GraphQL, TypeScript, React Native, CI/CD, Next.js, containers and relational databases.

## Progress

| Part         | Topic                                        | Status |
| ------------ | -------------------------------------------- | ------ |
| [0](part0)   | Fundamentals of Web apps                     | ✅     |
| [1](part1)   | Introduction to React                        | ✅     |
| [2](part2)   | Communicating with server                    | ✅     |
| [3](part3)   | Programming a server with NodeJS and Express | ⬜     |
| [4](part4)   | Testing Express servers, user administration | ⬜     |
| [5](part5)   | Testing React apps, React Router             | ⬜     |
| [6](part6)   | Advanced state management                    | ⬜     |
| [7](part7)   | Custom hooks, esbuild                        | ⬜     |
| [8](part8)   | GraphQL                                      | ⬜     |
| [9](part9)   | TypeScript                                   | ⬜     |
| [10](part10) | React Native                                 | ⬜     |
| [11](part11) | CI/CD                                        | ⬜     |
| [12](part12) | Containers                                   | ⬜     |
| [13](part13) | Using relational databases                   | ⬜     |
| [14](part14) | Next.js                                      | ⬜     |

Legend: ⬜ not started · 🟡 in progress · ✅ done

## Where I stopped

**Last done:** exercise 2.20 in [part2/countries](part2/countries) (weather in the capital). Exercises 2.18–2.20 are done; 2.16–2.17 in [part2/phonebook](part2/phonebook) were skipped for now.

**Next up:** 2.16–2.17 (phonebook notifications and error messages), then review [part2/countries](part2/countries) before moving on to part 3.

### Still to review

`part2/phonebook`:

- [x] Update sends the name as typed, so `elvis presley` renames "Elvis Presley". Send `{ ...duplicateContact, number }` to keep the stored name.
- [x] `setPersons(persons...)` after an `await` uses the `persons` from before the request. A functional update (`setPersons((prev) => ...)`) is safer.
- [x] `addContact` result is copied field by field into state; `data` can be used as is.

`part2/countries` (review all of 2.18–2.20 before moving on):

- [ ] Go through 2.18, 2.19 and 2.20 myself and make sure I understand every part of the solution.
- [ ] Check that the weather shows once the OpenWeather key is active (it returned `401` at first). The key is in `part2/countries/.env.local` as `VITE_WEATHER_KEY`.
- [ ] Countries with several capitals show them run together (`PretoriaBloemfonteinCape Town`); use `capital?.join(', ')`.
- [ ] Zero matches renders an empty list; show a "No matches" message.
- [ ] `10` in `CountriesList` is a magic number; name it (`MAX_MATCHES`).
- [ ] The countries fetch is inline in `App`; consider a `services/` module like the phonebook's.
- [ ] No error or loading handling for the countries fetch.

### Notes

-

## Structure

Each part lives in its own directory with a `README.md` listing the apps it
contains and the exercises they cover. Inside a part, every app is its own
subdirectory with its own `package.json`, so it can be installed and run
independently.

```
part1/            courseinfo, unicafe, anecdotes
part2/            courseinfo, phonebook, countries
part3/            phonebook-backend
part4/            bloglist-backend
part5/            bloglist-frontend, bloglist-e2e
part6/            unicafe-revisited, anecdotes, query-anecdotes
part7/            routed-anecdotes, country-hook, ultimate-hooks, bloglist
part8/            library-backend, library-frontend
part9/            first-steps, courseinfo, flight-diary-*, patientor-*
part10/           rate-repository-app
part13/           blogs-backend
part14/           Next.js apps
```

Parts 0, 11 and 12 contain no apps of their own: part 0 holds sequence
diagrams, and parts 11 and 12 are worked through in the course's provided
repositories, which those folders link to.

## Running an exercise

```bash
cd part1/courseinfo
npm install
npm run dev     # Vite dev server, usually http://localhost:5173
```

Backend projects (parts 3, 4, 8, 13) are started with:

```bash
npm install
npm run dev     # nodemon
npm test        # test suite, where present
```

Any environment variables a project needs are documented in its own README or
`.env.example` file. `.env` files are not committed.

## Formatting

Prettier is installed once at the repository root and formats the whole repo
(single quotes, semicolons). Linting stays per app (Oxlint for the part 1 apps, ESLint from part 2 on).

```bash
npm install            # from the repository root, once
npm run format         # format all files
npm run format:check   # check formatting without changing files
```

For format-on-save, open the repository root in VS Code and install the
recommended **Prettier - Code formatter** extension (`esbenp.prettier-vscode`).
Generated files, lockfiles and static assets are excluded via `.prettierignore`.

## Notes

Exercise submissions are tracked on the course's own
[submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
