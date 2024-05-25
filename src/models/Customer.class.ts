class Customer {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  birth_date?: string | null;
  create_date?: string | null;

  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.birth_date = null;
    this.create_date = null;
  }
}
export default Customer;
