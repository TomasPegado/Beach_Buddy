"""deleting  atributes for Treino

Revision ID: 7c32a2f15ccc
Revises: 53b51cad163b
Create Date: 2024-06-10 12:36:32.645173

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c32a2f15ccc'
down_revision = '53b51cad163b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('treino', schema=None) as batch_op:
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('treino', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=64), nullable=False))

    # ### end Alembic commands ###
