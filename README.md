# Nest.js Backend

This is a dummy backend (for practice) built using Nest.js.

## How to Run?

1. **Clone the repository**

   ```sh
      git clone https://github.com/ppriyankuu/nestjs-prac
      cd nestjs-prac
   ```

2. **Install dependencies**

   ```sh
      pnpm install
   ```

3. **Setup the database**

   - Create a `.env` file in the root directory.
   - Add your database URL to the `.env` file:

   ```env
      DATABASE_URL=your-database-url
   ```

4. **Seed the DB**

   ```sh
     pnpm dlx prisma db seed
   ```

5. **Run the development server**
   ```sh
      pnpm start:dev
   ```
