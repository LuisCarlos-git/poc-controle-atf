export interface IMapper<P, D> {
  toDomain?(data: P): D;
  toPersistent?(data: D): P;
}
